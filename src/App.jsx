import React, { useEffect, useState } from "react";
import { Row , Col} from "react-bootstrap";

import { Header } from "./components/header"
import { Patients } from "./components/patients";

import './App.css';

export default function App(){
    const [storeData, setStoreData] = useState({})
    // const [storeSensor_1, setStoreSensor_1] = useState({})
    // const [storeSensor_2, setStoreSensor_2] = useState({})
    
    useEffect(()=>{
        const fetchData = async () => {
            const userData = await fetch("https://tuamom-embedded.herokuapp.com/patients", {
                method: "GET"
            });
            // const sensorData1 = await fetch("https://tuamom-embedded.herokuapp.com/sensor/patient/1", {
            //     method: "GET"
            // });
            // const sensorData2 = await fetch("https://tuamom-embedded.herokuapp.com/sensor/patient/2", {
            //     method: "GET"
            // });
            const userInfo = await userData.json();
            // const sensorInfo1 = await sensorData1.json();
            // const sensorInfo2 = await sensorData2.json();
            setStoreData(userInfo)
            // setStoreSensor_1(sensorInfo1)
            // setStoreSensor_2(sensorInfo2)
        }
        fetchData();
    }, [])

    const patientData = storeData?.data?.result
    // const sensorData1 = storeSensor_1?.data?.result
    // const sensorData2 = storeSensor_2?.data?.result

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
