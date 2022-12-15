import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';


const Checkin = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleNameBlur = (e) => {
        setName(e.target.value)
    }
    const handleEmailBlur = (e) => {
        setEmail(e.target.value)
    }
    const handleAddressBlur = (e) => {
        setAddress(e.target.value)
    }
    const handlePhoneBlur = (e) => {
        setPhone(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const checkin = { name, email, address, phone }
        console.log(checkin)
    }

    return (
        <div className='mt-5'>
            <h2 className='text-center text-primary'>Please Check In</h2>
            <Form onSubmit={handleSubmit} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter your name" />
                    <Form.Text className="text-muted">
                        Enter your name.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control onBlur={handleAddressBlur} type="text" placeholder="Enter your address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control onBlur={handlePhoneBlur} type="phone" placeholder="Enter yourPhone number" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default Checkin;