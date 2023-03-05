/* eslint-disable jsx-a11y/alt-text */
import React from "react";

import alertPic from "../static/images/alert (1).png"
import foodPic from "../static/images/bowl-of-white-rice (1).png"
import gamePic from "../static/images/game-controller.png"
import bedPic from "../static/images/hotel-bed (1).png"
import restroomPic from "../static/images/toilet.png" 

export const Alert = () => {
    return (
        <div>
            <div className="emergency-square">
                <div className="emergency-circle"><img src={alertPic} className="alert-pic" /></div>
                <p className="emergency">Emergency</p>
            </div>
            <div className="small-square bed-square">
                <div className="small-circle bed-circle"><img src={bedPic} className="small-pic" /></div>
                <p className="alert-text">Bed</p>
            </div>
            <div className="small-square restroom-square">
                <div className="small-circle restroom-circle"><img src={restroomPic} className="small-pic" /></div>
                <p className="alert-text">Restroom</p>
            </div>
            <div className="small-square hungry-square">
                <div className="small-circle hungry-circle"><img src={foodPic} className="small-pic" /></div>
                <p className="alert-text">Hungry</p>
            </div>
            <div className="small-square game-square" style={{ marginRight: "0"}}>
                <div className="small-circle game-circle"><img src={gamePic} className="small-pic" /></div>
                <p className="alert-text">Game</p>
            </div>
        </div>
    )
}