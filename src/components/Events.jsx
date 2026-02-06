import React, { Component } from 'react';
import Event from './Event';
import eventsData from '../events.json';
import { Alert } from 'react-bootstrap';

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: eventsData,
            showBookingAlert: false
        };
    }



    buy = (eventIndex) => {
        const { events } = this.state;

        // Check if tickets are available
        if (events[eventIndex].nbTickets > 0) {
            const updatedEvents = [...events];
            updatedEvents[eventIndex].nbParticipants += 1;
            updatedEvents[eventIndex].nbTickets -= 1;

            this.setState({
                events: updatedEvents,
                showBookingAlert: true
            });

            // Hide booking alert after 2 seconds
            setTimeout(() => {
                this.setState({ showBookingAlert: false });
            }, 2000);
        }
    }

    toggleLike = (eventIndex) => {
        const { events } = this.state;
        const updatedEvents = [...events];
        updatedEvents[eventIndex].like = !updatedEvents[eventIndex].like;
        this.setState({ events: updatedEvents });
    }

    render() {
        const { events, showBookingAlert } = this.state;

        return (
            <div style={{ padding: '20px' }}>
                {/* Welcome Alert - Always Displayed */}
                <Alert variant="info" style={{ marginBottom: '20px' }}>
                    Hey welcome to Esprit Events
                </Alert>

                {/* Booking Confirmation Alert */}
                {showBookingAlert && (
                    <Alert variant="success" style={{ marginBottom: '20px' }}>
                        You have booked an event
                    </Alert>
                )}

                {/* Events Grid */}
                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '20px',
                    justifyContent: 'center'
                }}>
                    {events.map((event, index) => (
                        <Event
                            key={index}
                            event={event}
                            index={index}
                            onBook={this.buy}
                            onToggleLike={this.toggleLike}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Events;
