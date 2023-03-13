/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";

import alertPic from "../static/images/alert (1).png"
import foodPic from "../static/images/bowl-of-white-rice (1).png"
// import gamePic from "../static/images/game-controller.png"
import bedPic from "../static/images/hotel-bed (1).png"
import restroomPic from "../static/images/toilet.png" 

export const Alert = (props) => {
    const [storeSensor, setStoreSensor] = useState({})
    
    useEffect(()=>{
        const fetchData = async () => {
            const sensorData = await fetch("https://tuamom-embedded.herokuapp.com/sensor/patient/" + props.id.toString(), {
                method: "GET"
            });
            const sensorInfo = await sensorData.json();
            setStoreSensor(sensorInfo)
        }
        const intervalId = setInterval(fetchData, 500);
        return () => clearInterval(intervalId);
    }, [])

    const sensorData = storeSensor?.data?.result

    return (
        <div>
            <div className={sensorData?.Emergency ? "emergency-square emergency-square-on" : "emergency-square"}>
                <div className={sensorData?.Emergency ? "emergency-circle circle-on" : "emergency-circle"}><img src={alertPic} className="alert-pic" /></div>
                <p className={sensorData?.Emergency ? "emergency text-on" : "emergency"}>Emergency</p>
            </div>
            <div className="alert-2">
                <div className={sensorData?.Bed ? "small-square bed-on" : "small-square"}>
                    <div className={sensorData?.Bed ? "small-circle bed-circle circle-on" : "small-circle bed-circle"}><img src={bedPic} className="small-pic" /></div>
                    <p className={sensorData?.Bed ? "alert-text text-on" : "alert-text"}>Bed</p>
                </div>
                <div className={sensorData?.Restroom ? "small-square restroom-on" : "small-square"}>
                    <div className={sensorData?.Restroom ? "small-circle restroom-circle circle-on" : "small-circle restroom-circle"}><img src={restroomPic} className="small-pic" /></div>
                    <p className={sensorData?.Restroom ? "alert-text text-on" : "alert-text"}>Restroom</p>
                </div>
                <div className={sensorData?.Hungry ? "small-square hungry-on" : "small-square"} style={{ marginRight: "0"}}>
                    <div className={sensorData?.Hungry ? "small-circle hungry-circle circle-on" : "small-circle hungry-circle"}><img src={foodPic} className="small-pic" /></div>
                    <p className={sensorData?.Hungry ? "alert-text text-on" : "alert-text"}>Hungry</p>
                </div>
            </div>
            
            {/* <div className={sensorData?.Game ? "small-square game-on" : "small-square"} style={{ marginRight: "0"}}>
                <div className={sensorData?.Game ? "small-circle game-circle circle-on" : "small-circle game-circle"}><img src={gamePic} className="small-pic" /></div>
                <p className={sensorData?.Game ? "alert-text text-on" : "alert-text"}>Game</p>
            </div> */}
        </div>
    )
}