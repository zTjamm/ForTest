import React from "react";
import s from "./FriendList.module.css"
import FriendListItem from "./FriendListItem";

export default function FriendList({friends}) {
    const frItems = friends.map(f => <FriendListItem avatar={f.avatar} name={f.name} isOnline={f.isOnline} id={f.id}/>)
    return (
        <ul className={s.friendList}>
            {frItems}
        </ul>
    )
}