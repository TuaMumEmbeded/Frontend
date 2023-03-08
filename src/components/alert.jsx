/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import alertPic from "../static/images/alert (1).png"
import foodPic from "../static/images/bowl-of-white-rice (1).png"
import gamePic from "../static/images/game-controller.png"
import bedPic from "../static/images/hotel-bed (1).png"
import restroomPic from "../static/images/toilet.png" 

export const Alert = () => {
    var isEmergency = false;
    var isBed = false;
    var isRestroom = false;
    var isHungry = false;
    var isGame = false;
    return (
        <div>
            <div className={isEmergency ? "emergency-square emergency-square-on" : "emergency-square"}>
                <div className={isEmergency ? "emergency-circle circle-on" : "emergency-circle"}><img src={alertPic} className="alert-pic" /></div>
                <p className={isEmergency ? "emergency text-on" : "emergency"}>Emergency</p>
            </div>
            <div className="small-square bed-square">
                <div className={isBed ? "small-circle bed-circle circle-on" : "small-circle bed-circle"}><img src={bedPic} className="small-pic" /></div>
                <p className={isBed ? "alert-text text-on" : "alert-text"}>Bed</p>
            </div>
            <div className="small-square restroom-square">
                <div className={isRestroom ? "small-circle restroom-circle circle-on" : "small-circle restroom-circle"}><img src={restroomPic} className="small-pic" /></div>
                <p className={isRestroom ? "alert-text text-on" : "alert-text"}>Restroom</p>
            </div>
            <div className="small-square hungry-square">
                <div className={isHungry ? "small-circle hungry-circle circle-on" : "small-circle hungry-circle"}><img src={foodPic} className="small-pic" /></div>
                <p className={isHungry ? "alert-text text-on" : "alert-text"}>Hungry</p>
            </div>
            <div className="small-square game-square" style={{ marginRight: "0"}}>
                <div className={isRestroom ? "small-circle game-circle circle-on" : "small-circle game-circle"}><img src={gamePic} className="small-pic" /></div>
                <p className={isGame ? "alert-text text-on" : "alert-text"}>Game</p>
            </div>
        </div>
    )
}