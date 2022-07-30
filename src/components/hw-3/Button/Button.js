import React from "react";

export default function Button({text, onLoadClick}) {
    return(
        <div>
            <button type='button' onClick={onLoadClick}>{text}</button>
        </div>
    )

}