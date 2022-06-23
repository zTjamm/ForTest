import React from "react";
import PropTypes from 'prop-types';
import s from "./Statistics.module.css"

export default function Statistics({title, stats}) {
    function randomColor() {
        let r = Math.round((Math.random() * 255)); //red 0 to 255
        let g = Math.round((Math.random() * 255)); //green 0 to 255
        let b = Math.round((Math.random() * 255)); //blue 0 to 255
        return 'rgb(' + r + ', ' + g + ', ' + b + ')';
    };
    const item = stats.map(s=><li key={s.id} style={{background: randomColor()}}><span>{s.label}</span><span>{s.percentage}</span></li>)
    return(
            <div className={s.wrapper}>
                <section className={s.statistics}>
                    <h2 className={s.title}>{title}</h2>
                    <ul className={s.statList}>
                        {item}
                    </ul>
                </section>
            </div>
    )
}
Statistics.propTypes={
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        })
    )
}