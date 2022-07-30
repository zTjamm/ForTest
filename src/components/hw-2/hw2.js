import React from "react";
import s from "./hw2.module.css"
import {NavLink} from 'react-router-dom';


export default function Hw2() {
    return (
        <div className={s.wrapper}>
            <NavLink className={s.hw2Btn} to="/hw2/feedback">FeedBack</NavLink>
            <NavLink className={s.hw2Btn} to="/hw2/phonebook">Phonebook</NavLink>
            <NavLink className={s.hw2Btn} to="/hw2/phonebook-test">Phonebook-test</NavLink>

        </div>

    )
}