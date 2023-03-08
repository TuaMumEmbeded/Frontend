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
                {test.map(patient => (
                    <Col lg={6} md={1}><Patients 
                        key={patient.id}
                        firstname={patient.firstName}
                        lastname={patient.lastName}
                        gender={patient.gender}
                        age={patient.age}
                    /></Col> 
                ))}
                {/* <Col lg={6} md={1}><Patients /></Col> 
                <Col lg={6} md={1}><Patients /></Col> */}
            </Row>
        </div>
    )
}
