import React from "react";
import Cards from "../components/Cards";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";


const HomePage = () => {

    return (
        <>
            <Container>
                <Col><Cards /></Col>
            </Container>
            <Container>
                <Row><Footer /></Row>
            </Container>
        </>
    );

};

export default HomePage;
