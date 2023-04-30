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
const Header = () => {
    const {user} = useContext(AuthContext)
    return (
        <Container>
            <div className='text-center'>
                <img src={logo} alt="" />
                <p className='text-secondary'><small>Journalism without Fear and favour</small></p>
                <p>{moment().format("dddd, MMMM, D, YYYY")}</p>
            </div>
            <div className='d-flex'>
                <Button variant="danger">Danger</Button>
                <Marquee>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>

            
        </Container>

    );
};

export default Header;