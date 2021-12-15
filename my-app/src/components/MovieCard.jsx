import React from "react";
import { Card } from 'react-bootstrap';
import { CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";


const MovieCard = ({ title, y, images }) => {
    return (
        <CardGroup>
            <Card>
                <Link to={ `movies/${title}` }>
                    <Card.Header>{ title }</Card.Header>
                </Link>
                <Card.Img variant="top" src={ images['Poster Art']['url'] } rounded/>
                <Card.Footer>Release Year - { y }</Card.Footer>
            </Card>
        </CardGroup>
    );
};

export default MovieCard;