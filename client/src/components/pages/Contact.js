import SendmailTransport from 'nodemailer/lib/sendmail-transport';
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form'

import ygLogo from '../../assets/images/ygLogo.PNG';

const nodemailer = require('nodemailer')

function Contact() {

    const [formState, setFormState] = useState ({
        fname: '',
        lname: '',
        company: '',
        email: '',
        message: ''
    })

    const sendMail = async (mail) => {

        try {
            fetch('/send', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(mail),
              })
                .then((res) => res.json())
                .then((data) => {
                  console.log('Successful POST request:', data);
                  return data;
                })
                .catch((error) => {
                  console.error('Error in POST request:', error);
                });
        } catch (e){
            console.log(e);
        }
        
    }


    const handleChange = (event) => {
        event.preventDefault();

        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    const submitForm = async (event) => {
        event.preventDefault();

        console.log(formState);

        sendMail(formState);

        // setFormState({
        //     fname: '',
        //     lname: '',
        //     company: '',
        //     email: '',
        //     message: ''
        // })
    }

    return (
        <div className="fullVP d-flex align-items-center test123" id="contact">
            <div className="jumbotron flex-fill">
                <div className="container">
                    <div className="row">
                    <div className="col-3 d-flex justify-content-center align-items-center">
                        <div className="m-1 borderRight">
                            <p className="formHeaderText">C</p>
                            <p className="formHeaderText">O</p>
                            <p className="formHeaderText">N</p>
                            <p className="formHeaderText">T</p>
                            <p className="formHeaderText">A</p>
                            <p className="formHeaderText">C</p>
                            <p className="formHeaderText">T</p>
                            <br />
                            <p className="formHeaderText">F</p>
                            <p className="formHeaderText">O</p>
                            <p className="formHeaderText">R</p>
                            <p className="formHeaderText">M</p>
                        </div>
                    </div>
                    <div className="col-9">
                        <Form className="formStyle">
                            <Form.Group className="mb-3 d-flex justify-content-center" controlId="ControlInput1">
                                <div className='d-flex align-items-center'>
                                    <img src={ygLogo} className="sizeFormLogo" alt="logo" />
                                    <h2 className="m-0">Fill Out Below...</h2>
                                </div>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="ControlInput1">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="First Name..."
                                    name="fname"
                                    value={formState.fname}
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="ControlInput2">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Last Name..."
                                    name="lname"
                                    value={formState.lname}
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="ControlInput3">
                                <Form.Label>Company</Form.Label>
                                <Form.Control 
                                    type="text" 
                                    placeholder="Company..."
                                    name="company"
                                    value={formState.company}
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="ControlInput4">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control 
                                    type="email" 
                                    placeholder="email@gmail.com"
                                    name="email"
                                    value={formState.email}
                                    onChange={handleChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control 
                                    as="textarea" 
                                    rows={3}
                                    name="message"
                                    value={formState.message}
                                    onChange={handleChange} />
                            </Form.Group>
                            <button onClick={submitForm}>Hit Me</button>
                        </Form>
                    </div>
                    </div>  
                </div>
            </div>
        </div>
    )
}

export default Contact;