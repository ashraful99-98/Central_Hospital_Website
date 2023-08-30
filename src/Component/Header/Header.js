import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import logo from '../images/logo/logo.png';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.css';
import useFirebase from '../../hooks/useFirebase';


const Header = () => {

    // const { user, logOut } = useFirebase();

    const userSoul = <FontAwesomeIcon icon={faUser} />
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="light">
                <Container fluid>
                    <Image src={logo} />
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link class="nav-link" href="/home">Home</Nav.Link>
                            <Nav.Link class="nav-link" href="/about">About</Nav.Link>
                            <Nav.Link class="nav-link" href="/support">Support</Nav.Link>
                            <Nav.Link class="nav-link" href="/services">Services</Nav.Link>
                            <Nav.Link class="nav-link" href="/contact">Contact</Nav.Link>
                            {/* <Nav.Link>
                                <span>"Hello!..{user.displayName}</span>"</Nav.Link> */}
                            {/* {
                                user.Email ?
                                    <button onClick={logOut} >LogOut</button>
                                    :
                                    <Nav.Link href="/login">Login</Nav.Link>
                            } */}
                        </Nav>
                        <Nav>
                            <div>
                                <h2 className="text-primary width-30 me-3">{userSoul}</h2>
                            </div>
                            <Nav.Link className="btn btn-primary text-light" href="/contact">Appointment</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;