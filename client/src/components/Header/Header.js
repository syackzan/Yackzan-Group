import React, { useState } from 'react'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import ygLogo from '../../assets/images/ygLogo.PNG';

import { Link } from 'react-router-dom';

function Header({ currentPage, handlePageChange }) {

    const [sidenavDisplay, setSideNavDisplay] = useState('');

    const showSideNav = () => setSideNavDisplay('t');
    const closeSideNav = () => setSideNavDisplay('');

    let aboutUs = false;

    

    return (
        <>
            <Navbar className="20Percent align-items-stretch p-0">
                <Container className="d-flex justify-content-center navContainer">
                    <Navbar.Brand className="navImage" onClick={() => handlePageChange('')}>
                        <Link to='/'><img src={ygLogo} alt="YG Logo" /></Link>
                    </Navbar.Brand>
                    <Nav className="d-flex flex-wrap justify-content-center webDisplay align-items-center">
                        <div className={currentPage === 'aboutus' ? ("active") : ("flexIt")}> 
                            <Link className={currentPage === 'aboutus' ? ("noStyle activeText p-2") : ("m-1 navText noStyle")} to="/aboutus" onClick={() => handlePageChange('aboutus')}>About Us</Link>
                        </div> 
                        <div className={currentPage === 'developments' ? ("active") : ("flexIt")}>
                            <Link className={currentPage === 'developments' ? ("noStyle activeText p-2") : ("m-1 navText noStyle")} to="/developments" onClick={() => handlePageChange('developments')} onClick={() => handlePageChange('developments')}>Developments</Link>
                        </div>
                        <div className={currentPage === 'property' ? ("active") : ("flexIt")}>
                            <Link className={currentPage === 'property' ? ("noStyle activeText p-2") : ("m-1 navText noStyle")} to="/properties" onClick={() => handlePageChange('property')}>Property Management</Link>
                        </div>
                        <div className={currentPage === 'contact' ? ("active") : ("flexIt")}>
                            <Link className={currentPage === 'contact' ? ("noStyle activeText p-2") : ("m-1 navText noStyle")} to="/contact" onClick={() => handlePageChange('contact')}>Contact Us</Link>
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