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

    function changeNav (page){

        setSideNavDisplay('')
        handlePageChange(page);

        window.location.reload();
    }

    return (
        <>
            <header className="header">
                <div className="container navContainer h-100">
                    <div onClick={() => handlePageChange('')}>
                        <Link to='/'><img src={ygLogo} alt="YG Logo" /></Link>
                    </div>
                    <div className="navlinks webDisplay">
                        <div className={currentPage === 'aboutus' ? ("active") : ("flexIt")}>
                            <Link className={currentPage === 'aboutus' ? ("noStyle activeText p-2") : ("m-1 navText noStyle")} to="/aboutus" onClick={() => handlePageChange('aboutus')}>About Us</Link>
                        </div>
                        <div className={currentPage === 'developments' ? ("active") : ("flexIt")}>
                            <Link className={currentPage === 'developments' ? ("noStyle activeText p-2") : ("m-1 navText noStyle")} to="/developments" onClick={() => handlePageChange('developments')}>Developments</Link>
                        </div>
                        <div className={currentPage === 'property' ? ("active") : ("flexIt")}>
                            <Link className={currentPage === 'property' ? ("noStyle activeText p-2") : ("m-1 navText noStyle")} to="/properties" onClick={() => handlePageChange('property')}>Property Management</Link>
                        </div>
                        <div className={currentPage === 'contact' ? ("active") : ("flexIt")}>
                            <Link className={currentPage === 'contact' ? ("noStyle activeText p-2") : ("m-1 navText noStyle")} to="/contact" onClick={() => handlePageChange('contact')}>Contact Us</Link>
                        </div>
                    </div>
                    <div></div>
                    <div className="phoneDisplay">
                        <button onClick={showSideNav}>☰</button>
                    </div>
                </div>
                <div className={sidenavDisplay ? ("sidenav displayYes") : ("displayNo")}>
                    <div className="d-flex justify-content-end m-1">
                        <button className="" onClick={closeSideNav}>x</button>
                    </div>
                    <ul className="nav nav-tabs display-flex flex-column align-items-center">
                        <li className="sidenav-item">
                            <Link className="sidenavStyle" to="/aboutus" onClick={() => changeNav('aboutus')}>About Us</Link>
                        </li>
                        <li className="sidenav-item">
                            <Link className="sidenavStyle" to="/developments" onClick={() => changeNav('developments')}>Developments</Link>
                        </li>
                        <li className="sidenav-item">
                            <Link className="sidenavStyle" to="/properties" onClick={() => changeNav('property')}>Property Management</Link>
                        </li>
                        <li className="sidenav-item">
                            <Link className="sidenavStyle" to="/contact" onClick={() => changeNav('contact')}>Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    )
}

export default Header;