import React from "react";

export default function Button({state}) {
    const btn = Object.keys(state).map(b=><button name={b} type="button">{b}</button>)
    return(
        <div>
            {btn}
        </div>
    )

}