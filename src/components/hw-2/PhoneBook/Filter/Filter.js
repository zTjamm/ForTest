import React from "react";
import s from "./Filter.module.css"

export default function Filter({state,onInputFilter}) {
    return (
        <div className={s.items}>
            <p>Find Contacts by name</p>
            <input
                onInput={onInputFilter}
                value={state.filter}
                type="text"
                name="filter"
            />
        </div>
    )
}