import React, { useState, useEffect } from "react";

export const Activity = (props) => {
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

    const sensorData = storeSensor?.data?.result?.Game

    return (
        <div className="activity">
            <div className={sensorData ? "med-square game game-on" : "med-square game"}>
                <p className="playtime weekly">Game</p>
                {/* <p className="average-playtime average-weekly weekly">-1.21%</p> */}
                <p className="playtime-text playtime-weekly weekly">is now playing...</p>
            </div>
            <div className="med-square piano anim-sequence" style={{ marginRight: "0"}}>
                <span className={sensorData ? "anim1" : ""}></span>
                <span className={sensorData ? "anim2" : ""}></span>
                <span className={sensorData ? "anim3" : ""}></span>
                <span className={sensorData ? "anim4" : ""}></span>
                <span className={sensorData ? "anim5" : ""}></span>
                <span className={sensorData ? "anim6" : ""}></span>
                <span className={sensorData ? "anim7" : ""}></span>
                <span className={sensorData ? "anim8" : ""} style={{ marginRight: "0"}}></span>
            </div>
        </div>
    )
}