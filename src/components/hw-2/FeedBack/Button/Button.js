import React from "react";
import s from "./Button.module.css"

export default function Button({state, increment}) {
    const btn = Object.keys(state).map((b, id)=><button className={s.btn} key={id} onClick={increment} name={b} type="button">{b}</button>)
    return(
        <div>
            {btn}
        </div>
    )

}