import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle, useSignInWithYahoo } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Login = () => {
    const [user] = useAuthState(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithYahoo] = useSignInWithYahoo(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    const [signInWithFacebook] = useSignInWithFacebook(auth);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location?.state?.from?.pathName || '/';

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }

    if (user) {
        navigate(from, { replace: true })
    }
    const handleSubmit = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)

    }

    return (
        <div className='mt-5'>
            <h2 className='text-center'>Log In</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto '>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check className='d-inline-block me-2' type="checkbox" label="Create an account" />
                    <Link className='text-decoration-none d-inline-block' to='/signup'>Register</Link>
                </Form.Group>

                <Button className='w-100 p-2 text-center' variant="secondary" type="submit">
                    Login
                </Button>
            </Form>
            <div className='text-center'>
                <div className="col-6 mx-auto">
                    <Button onClick={() => signInWithGoogle()} className='w-25 p-2 text-center mt-4 mx-3' variant="primary" type="submit">
                        Sign In With Google
                    </Button>
                    <Button onClick={() => signInWithGithub()} className='w-25 p-2 text-center mt-4 mx-3' variant="info" type="submit">
                        Sign In With Github
                    </Button>
                </div>
                <div className="col-6 mx-auto">
                    <Button onClick={() => signInWithFacebook()} className='w-25 p-2 text-center mt-4 mx-3' variant="warning" type="submit">
                        Sign In With Facebook
                    </Button>
                    <Button onClick={() => signInWithYahoo()} className='w-25 p-2 text-center mt-4 mx-3' variant="dark" type="submit">
                        Sign In With Yahoo
                    </Button>
                </div>

            </div>
        </div>
    );
};

export default Login;