import React from "react";
import s from "./ContactList.module.css"

export default function ContactList ({filterContacts,onDelForId,state}) {
    const contact = filterContacts.map((contact)=>
        <li className={s.items} key={contact.id}>
            <p>{contact.name}: {contact.number}</p>
            <button className={s.btn} id={contact.id} type="button" onClick={()=>{onDelForId(contact.id)}}>Delete</button>
        </li>
    )
    return(
       <ul className={s.item}>
           {contact}
       </ul>
    )
}