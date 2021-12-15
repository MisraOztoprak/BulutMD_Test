import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import HomePage from "./pages/HomePage";
import Container from "react-bootstrap/Container";
import NavBar from "./components/NavBar";
import Col from "react-bootstrap/Col";
import Row from 'react-bootstrap/Row';
import './App.css';


const App = () => {
    return (
        <BrowserRouter>
            <Container>
                <Row>
                    <Col><NavBar/></Col>
                </Row>
                <Switch>
                    <Route exact path="/" component={ HomePage }/>
                    <Route exact path="/movies" component={ MoviesPage }/>
                    <Route exact path="/series" component={ SeriesPage }/>
                </Switch>
            </Container>
        </BrowserRouter>
    );
};


export default App;
