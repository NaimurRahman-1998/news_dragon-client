/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';



const Login = () => {
    const [err, setErr] = useState(null)
    const [succ,setSucc] =useState(null)
    const { login } = useContext(AuthContext);
    const navigate= useNavigate()
    const location = useLocation()



    const from = location?.state?.from?.pathname || '/category/0'


    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                setSucc('Successfully Logged IN')
                setErr('')
                navigate(from)
            })
            .catch(error => {
                setErr(error)
            })
    }
    return (
        <Container className='w-25 mx-auto'>
            <h3>Please Login</h3>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Don't Have an Account? <Link to="/register">Register</Link>
                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
                <Form.Text className="text-success">
                    {err && <p>{err.message}</p>}
                    {succ && <p>{succ}</p> }
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Login;