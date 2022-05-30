import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { CustomLink } from './CustomLink';
import logo from '../../assets/img/logo.png'

const NavBar = () => {
    return (
        <header className='p-3'>
            <div className="container">
                <div className='d-none d-lg-flex justify-content-between'>
                        <Navbar.Brand href="#home">
                            <img
                                src={logo}
                                width=""
                                height="30"
                                className="d-inline-block align-top"
                                alt=""
                            />
                        </Navbar.Brand>
                    <p><small><span className='text-success'>BN</span> / EN</small></p>
                </div>
                <Navbar collapseOnSelect expand="lg" bg="" variant="light" className='p-0'>
                    <>
                        <Navbar.Brand href="#home">
                            <img
                                src={logo}
                                width=""
                                height="30"
                                className="d-lg-none d-inline-block align-top"
                                alt=""
                            />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={CustomLink} to="/home">HOME</Nav.Link>
                                <Nav.Link as={CustomLink} to="/advertiser">ADVERTISER</Nav.Link>
                                <Nav.Link as={CustomLink} to="/publisher">PUBLISHER</Nav.Link>
                                <Nav.Link as={CustomLink} to="/influencer">INFLUENCER</Nav.Link>
                                <Nav.Link as={CustomLink} to="/addFormats">AD FORMATS</Nav.Link>
                                <Nav.Link as={CustomLink} to="/blog">BLOG</Nav.Link>
                                <Nav.Link as={CustomLink} to="/contactUs">CONTACT US</Nav.Link>
                            </Nav>
                            <Nav className='bg-white rounded-pill px-4 d-flex align-items-center justify-content-between shadow-sm'>
                                <Nav.Link as={CustomLink} to="/deets">  LOGIN </Nav.Link>
                                <Nav.Link eventKey={2} as={CustomLink} to="/memes">
                                    <button className='btn  bgPrimary rounded-pill shadow-sm text-white'>SIGN UP</button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </>
                </Navbar>
            </div>
        </header>
    );
};

export default NavBar;