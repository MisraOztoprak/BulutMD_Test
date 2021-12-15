import React from "react";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Row } from "react-bootstrap";



const NavBar = () => {
    return (
        <>
        <Navbar fixed="top" bg="dark" variant="dark">
            <Container>
                <Link to={'/'}>
                    <Navbar.Brand href="#home">Bulut MD</Navbar.Brand>
                </Link>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Deneme Sürümü <a href="#login">Login</a>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
         <Navbar bg="dark" variant="dark ">
           <Container>
             <Navbar.Brand>Populer Başlıklar</Navbar.Brand>
           </Container>
         </Navbar>
         </>
    );
};

export default NavBar;