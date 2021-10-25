import React, { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import ygLogo from '../../assets/images/ygLogo.PNG';

function Header() {

    const [sidenavDisplay, setSideNavDisplay] = useState('');

    const showSideNav = () => setSideNavDisplay('t');
    const closeSideNav = () => setSideNavDisplay('');

    return (
        <>
            <Navbar className="20Percent">
                <Container className="d-flex justify-content-center navContainer">
                    <Navbar.Brand className="navImage" href="#home">
                        <img src={ygLogo} alt="YG Logo" />
                    </Navbar.Brand>
                    <Nav className="d-flex flex-wrap justify-content-center webDisplay"> {}
                        <Nav.Link className="m-1 navText" href="#home">About Us</Nav.Link>
                        <Nav.Link className="m-1 navText" href="#features">Developments</Nav.Link>
                        <Nav.Link className="m-1 navText" href="#pricing">Property Management</Nav.Link>
                        <Nav.Link className="m-1 navText" href="#pricing">Team</Nav.Link>
                        <Nav.Link className="m-1 navText" href="#pricing">Contact Us</Nav.Link>
                    </Nav>
                    <div className="phoneDisplay">
                        <button onClick={showSideNav}>☰</button>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;