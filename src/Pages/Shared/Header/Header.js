import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>

                    <Nav className="mx-auto">
                        <Link className='text-decoration-none p-2 text-secondary' to='/'>Home</Link>

                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>

                        {user ? <button onClick={() => signOut()}>Sign Out</button>
                            :
                            <Link className='text-decoration-none p-2 text-secondary' to='/signup'>Register</Link>}
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;