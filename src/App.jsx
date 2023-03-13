import React, { useEffect, useState } from "react";
import { Row , Col} from "react-bootstrap";

import { Header } from "./components/header"
import { Patients } from "./components/patients";

import './App.css';

export default function App(){
    const [storeData, setStoreData] = useState({})
    
    useEffect(()=>{
        const fetchData = async () => {
            const userData = await fetch("https://tuamom-embedded.herokuapp.com/patients", {
                method: "GET"
            });
            const userInfo = await userData.json();
            setStoreData(userInfo)
        }
        fetchData();
    }, [])

    const patientData = storeData?.data?.result
    console.log(patientData)
    
    return (
        <div>
            <Header />
            <Row>
                {patientData?.map(patient => (
                    <Col lg={6} md={1}><Patients 
                        key={patient.Id}
                        id={patient.Patient_id}
                        firstname={patient.Firstname}
                        lastname={patient.Lastname}
                        gender={patient.Gender}
                        age={patient.Age}
                    /></Col> 
                ))}
            </Row>
        </div>
    )
}
