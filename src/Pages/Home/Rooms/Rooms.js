import React, { useEffect, useState } from 'react';
import Room from '../Room/Room';

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetch('rooms.JSON')
            .then(res => res.json())
            .then(data => setRooms(data))
    }, [])
    return (
        <div>
            <h2>Rooms {rooms.length}</h2>
            <div className='row w-75 mx-auto'>
                {
                    rooms.map(room => <Room
                        key={room.id}
                        room={room}
                    ></Room>)
                }
            </div>

        </div>
    );
};

export default Rooms;