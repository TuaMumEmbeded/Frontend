/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Card , Col, Row } from "react-bootstrap";

import alertPic from "../static/images/alert (1).png"
import foodPic from "../static/images/bowl-of-white-rice (1).png"
import gamePic from "../static/images/game-controller.png"
import bedPic from "../static/images/hotel-bed (1).png"
import restroomPic from "../static/images/toilet.png" 

import { Alert } from "./alert.jsx"
import { Activity } from "./activity.jsx" 

export const Patients = () => {
    return (
        <Card className="patient-card">
            <Card.Title className="patient-name">Mr. Firstname Lastname</Card.Title>
            <Card.Body>
                <Card.Text className="info">Male, 96 years old</Card.Text>
                <div className="alert">
                    <Card.Title className="title">Alert</Card.Title>
                    <Alert />
                </div>
                <div className="activity">
                    <Card.Title className="title">Activity</Card.Title>
                    <Activity />
                </div>
            </Card.Body>
        </Card>
    )
}