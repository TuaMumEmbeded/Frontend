import React from "react";
import { Row , Col} from "react-bootstrap";

import { Header } from "./components/header"
import { Patients } from "./components/patients";
import test from "./test.js"

import './App.css';

export default function App(){
    return (
        <div>
            <Header />
            <Row>
                <Col lg={6} md={1}><Patients /></Col> 
                <Col lg={6} md={1}><Patients /></Col>
            </Row>
        </div>
    )
}
