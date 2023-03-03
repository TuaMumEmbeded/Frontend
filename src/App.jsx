import React from "react";
import { Header } from "./components/header"
import { Patients } from "./components/patients";
import { Row , Col} from "react-bootstrap";

import './App.css';


export default function App(){
    return (
        <div>
            <Header />
            <Row>
                <Col lg={6}><Patients /></Col> 
                <Col lg={6}><Patients /></Col>
            </Row>
        </div>
    )
}
