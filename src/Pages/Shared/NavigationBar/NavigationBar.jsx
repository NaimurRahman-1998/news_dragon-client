/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Marquee from "react-fast-marquee";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../provider/AuthProvider';

const NavigationBar = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                // An error happened.
            });

    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Dragon News</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav ">
                        <Nav className="mx-auto">
                            <Link className='me-3' to='/'>Home</Link>
                            <Link className='me-3'>about</Link>
                            <Link className='me-3'>Career</Link>

                        </Nav>
                    </Navbar.Collapse>
                    <Nav>
                        {user && <Nav.Link href=''>Signed in as: <span>{user?.email}</span> </Nav.Link>}
                        {user ? <Button onClick={handleLogout}>Logout</Button> : <Link to='/login'><Button>LogIn</Button></Link>}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavigationBar;