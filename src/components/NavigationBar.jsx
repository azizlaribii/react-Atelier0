import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg" style={{ marginBottom: '20px' }}>
            <Container>
                <Navbar.Brand as={NavLink} to="/">MyEvents</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/events" style={({ isActive }) => ({ textDecoration: isActive ? 'underline' : 'none' })}>Events</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;
