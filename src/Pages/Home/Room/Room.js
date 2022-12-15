import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Room = ({ room }) => {
    const { name, img, price } = room;
    const navigate = useNavigate();
    return (
        <div className='col-12 col-md-4 g-4 '>
            < Card >
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>Price: $ {price} per night</p>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button onClick={() => navigate('/checkin')} variant="secondary">Check In</Button>
                </Card.Body>
            </Card >
        </div>

    );
};

export default Room;