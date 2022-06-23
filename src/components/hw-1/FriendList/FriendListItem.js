import React from "react";
import s from "./FriendListItem.module.css";

export default function FriendListItem({avatar, name, isOnline,id}) {
    return (
        <li key={id} className={s.item}>
            <span className={isOnline ? s.onL : s.offL}></span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48"/>
            <p className={s.name}>{name}</p>
        </li>
    )
}