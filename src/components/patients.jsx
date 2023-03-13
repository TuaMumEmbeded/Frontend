/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Card } from "react-bootstrap";

import { Alert } from "./alert.jsx"
import { Activity } from "./activity.jsx" 

export const Patients = (props) => {
    // console.log(props.id.toString())
    var nameTitle = props.gender.toString() === "Male" ? "Mr." : "Ms."
    console.log(nameTitle)

    return (
        <Card className="patient-card">
            <Card.Title className="patient-name">{nameTitle} {props.firstname} {props.lastname}</Card.Title>
            <Card.Body>
                <Card.Text className="info">{props.gender}, {props.age} years old</Card.Text>
                <div className="alert">
                    <Card.Title className="title">Alert</Card.Title>
                    <Alert 
                        id={props.id.toString()}
                    />
                </div>
                <div>
                    <Card.Title className="title">Activity</Card.Title>
                    <Activity 
                        id={props.id.toString()}
                    />
                </div>
            </Card.Body>
        </Card>
    )
}