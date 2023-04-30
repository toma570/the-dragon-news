import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms & Conditions</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem molestiae magnam sequi. Suscipit, id obcaecati! Perferendis, suscipit numquam unde veniam dolore animi adipisci non repellendus, porro reprehenderit ipsam voluptate assumenda?</p>
            <p>Go back to <Link to="/register">Register</Link></p>
        </Container>
    );
};

export default Terms;