/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Card } from "react-bootstrap";

import { Alert } from "./alert.jsx"
import { Activity } from "./activity.jsx" 

export const Patients = (props) => {
    return (
        <Card className="patient-card">
            <Card.Title className="patient-name">{props.firstname} {props.lastname}</Card.Title>
            <Card.Body>
                <Card.Text className="info">{props.gender}, {props.age} years old</Card.Text>
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