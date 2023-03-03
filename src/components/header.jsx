import React from "react";

export const Header = () => {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const d = new Date()
    let date = d.getDate()
    let m = month[d.getMonth()] 
    let day = weekday[d.getDay()]
    let year = d.getFullYear()

    return (
        
        <div className="dateHeader">
            <h1>{day}, {m} {date}, {year}</h1>
        </div>
    )
}
