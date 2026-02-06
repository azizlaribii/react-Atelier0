import React from 'react';

function Event({ event, onBook, onToggleLike, index }) {
    const { name, description, img, price, nbTickets, nbParticipants, like } = event;
    const isSoldOut = nbTickets === 0;

    return (
        <div style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            width: '300px',
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            backgroundColor: '#fff',
            position: 'relative'
        }}>
            {/* Sold Out Overlay */}
            {isSoldOut && (
                <div style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10
                }}>
                    <div style={{
                        transform: 'rotate(-15deg)',
                        fontSize: '48px',
                        fontWeight: 'bold',
                        color: '#e74c3c',
                        border: '8px solid #e74c3c',
                        padding: '20px 40px',
                        borderRadius: '10px'
                    }}>
                        SOLD OUT
                    </div>
                </div>
            )}

            {/* Image */}
            <div style={{
                width: '100%',
                height: '250px',
                backgroundColor: '#e8e8e8',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
            }}>
                {img ? (
                    <img
                        src={`/Images/${img}`}
                        alt={name}
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                ) : (
                    <svg
                        width="120"
                        height="120"
                        viewBox="0 0 120 120"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <rect x="10" y="10" width="100" height="100" rx="4" stroke="#999" strokeWidth="4" fill="none" />
                        <circle cx="40" cy="40" r="12" fill="#999" />
                        <path d="M20 90 L50 60 L70 80 L100 50 L100 90 Z" fill="#999" />
                    </svg>
                )}
            </div>

            {/* Event details */}
            <div style={{ padding: '20px' }}>
                <h3 style={{
                    margin: '0 0 15px 0',
                    fontSize: '18px',
                    fontWeight: 'bold',
                    color: '#333'
                }}>
                    {name}
                </h3>

                <p style={{
                    margin: '8px 0',
                    fontSize: '14px',
                    color: '#666'
                }}>
                    Price : {price}
                </p>

                <p style={{
                    margin: '8px 0',
                    fontSize: '14px',
                    color: '#666'
                }}>
                    Number of tickets : {nbTickets}
                </p>

                <p style={{
                    margin: '8px 0',
                    fontSize: '14px',
                    color: '#666'
                }}>
                    Number of participants : {nbParticipants}
                </p>

                {/* Buttons */}
                <div style={{ marginTop: '15px', display: 'flex', gap: '10px' }}>
                    <button
                        className={`btn ${like ? 'btn-danger' : 'btn-info'}`}
                        onClick={() => onToggleLike(index)}
                        style={{ flex: 1 }}
                    >
                        {like ? 'Dislike' : 'Like'}
                    </button>

                    <button
                        className="btn btn-primary"
                        onClick={() => onBook(index)}
                        disabled={isSoldOut}
                        style={{ flex: 1 }}
                    >
                        Book an event
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Event;
