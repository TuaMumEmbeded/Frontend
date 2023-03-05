import React from "react";

export const Activity = () => {
    return (
        <div>
            <div className="med-square daily-playtime-box">
                <p className="playtime daily">1h 3m</p>
                <p className="average-playtime average-daily daily">+2.34%</p>
                <p className="playtime-text playtime-daily daily">Daily Playtime</p>
            </div>
            <div className="med-square weekly-playtime-box" style={{ marginRight: "0"}}>
                <p className="playtime weekly">2h 43m</p>
                <p className="average-playtime average-weekly weekly">-1.21%</p>
                <p className="playtime-text playtime-weekly weekly">Weekly Playtime</p>
            </div>
        </div>
    )
}