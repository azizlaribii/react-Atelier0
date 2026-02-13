import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../assets/notfound.jfif';

const NotFound = () => {
    return (
        <div style={{
            backgroundColor: '#343078', // Dark blue/purple background
            color: 'white',
            minHeight: '600px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            padding: '40px',
            marginTop: '20px'
        }}>
            <div style={{ paddingRight: '50px', maxWidth: '500px' }}>
                <h1 style={{ fontSize: '8rem', margin: 0, fontWeight: 'bold' }}>404</h1>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Sorry, the page not found</h3>
                <p style={{ fontSize: '1rem', opacity: 0.8 }}>The link you followed probably broken or the page has been removed.</p>
                <Link to="/" className="btn btn-light mt-3" style={{ color: '#343078', fontWeight: 'bold' }}>Return Home</Link>
            </div>
            <div>
                <img src={notfound} alt="Broken Robot" style={{ maxWidth: '300px', height: 'auto' }} />
            </div>
        </div>
    );
};

export default NotFound;
