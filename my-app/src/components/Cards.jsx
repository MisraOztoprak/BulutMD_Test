import React from "react";
import { Card } from 'react-bootstrap';
import { CardGroup } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const Cards = () => {
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top"
                          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-1614634680.jpg"
                          rounded/>
                <Card.Body>
                    <Card.Title>Movies</Card.Title>
                    <Link to={'/movies'}>
                        <Button variant="primary">Go Movies Page</Button>
                    </Link>
                </Card.Body>
            </Card>
            <Card>
                <Card.Img variant="top"
                          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-1614634680.jpg"
                          rounded/>
                <Card.Body>
                    <Card.Title>Series</Card.Title>
                    <Link to={'/series'}>
                        <Button variant="primary">Go Series Page</Button>
                    </Link>
                </Card.Body>
            </Card>
            
        </CardGroup>
    );
};

export default Cards;