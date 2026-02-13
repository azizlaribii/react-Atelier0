import React from 'react';
import { useParams } from 'react-router-dom';
import eventsData from '../events.json';

const EventDetails = () => {
    const { name } = useParams();
    const event = eventsData.find(e => e.name === name);

    if (!event) {
        return <h2>Event not found</h2>;
    }

    return (
        <div style={{ display: 'flex', padding: '20px', gap: '30px' }}>
            <div>
                <img
                    src={`/Images/${event.img}`}
                    alt={event.name}
                    style={{ width: '300px', height: 'auto', objectFit: 'cover' }}
                />
            </div>
            <div>
                <h2>{event.name}</h2>
                <div style={{ marginTop: '20px' }}>
                    <strong>Description</strong>
                    <p style={{ marginTop: '10px' }}>{event.description}</p>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <strong>Price</strong>
                    <p>{event.price} DT</p>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <p>Number of tickets: {event.nbTickets}</p>
                    <p>Number of participants: {event.nbParticipants}</p>
                </div>
                <div style={{ marginTop: '20px' }}>
                    <p>Like: {event.like ? 'Yes' : 'No'}</p>
                    <div style={{ marginTop: '10px' }}>
                        <button className="btn btn-info me-2">Like</button>
                        <button className="btn btn-primary">Book an event</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
