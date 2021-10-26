import React, { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import ygLogo from '../../assets/images/ygLogo.PNG';

function Header({ currentPage, handlePageChange }) {

    const [sidenavDisplay, setSideNavDisplay] = useState('');

    const showSideNav = () => setSideNavDisplay('t');
    const closeSideNav = () => setSideNavDisplay('');

    let aboutUs = false;

    return (
        <>
            <Navbar className="20Percent align-items-stretch p-0">
                <Container className="d-flex justify-content-center navContainer">
                    <Navbar.Brand className="navImage" href="#home" onClick={() => handlePageChange('')}>
                        <img src={ygLogo} alt="YG Logo" />
                    </Navbar.Brand>
                    <Nav className="d-flex flex-wrap justify-content-center webDisplay align-items-center">
                        <div className={currentPage === 'aboutus' ? ("active") : ("flexIt")}> 
                            <Nav.Link className={currentPage === 'aboutus' ? ("noStyle activeText") : ("m-1 navText noStyle")} to="#home" onClick={() => handlePageChange('aboutus')}>About Us</Nav.Link>
                        </div> 
                        <div className={currentPage === 'developments' ? ("active") : ("flexIt")}>
                            <Nav.Link className={currentPage === 'developments' ? ("noStyle activeText") : ("m-1 navText noStyle")} to="#home" onClick={() => handlePageChange('aboutus')} to="#features" onClick={() => handlePageChange('developments')}>Developments</Nav.Link>
                        </div>
                        <div className={currentPage === 'property' ? ("active") : ("flexIt")}>
                            <Nav.Link className={currentPage === 'property' ? ("noStyle activeText") : ("m-1 navText noStyle")} to="#pricing" onClick={() => handlePageChange('property')}>Property Management</Nav.Link>
                        </div>
                        <div className={currentPage === 'contact' ? ("active") : ("flexIt")}>
                            <Nav.Link className={currentPage === 'contact' ? ("noStyle activeText") : ("m-1 navText noStyle")} to="#pricing" onClick={() => handlePageChange('contact')}>Contact Us</Nav.Link>
                        </div>
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