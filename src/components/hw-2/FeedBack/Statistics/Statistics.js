import React from "react";
import s from "./Statistics.module.css"

export default function Statistics({state:{good, neutral, bad}}) {
    const total = bad + neutral + good;
    const posFeed = 100-((bad+neutral)*(100/total));
    return(
        <div className={s.wrapper}>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive feedback: {Math.round(posFeed)}%</p>
        </div>
    )
}