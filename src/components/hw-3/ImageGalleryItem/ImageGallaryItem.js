import React from "react";

export default function ImageGallaryItem ({image,largeImageURL, tags, onModal}) {
    return(
        <li>
            <img
            onClick={()=> onModal(largeImageURL)}
            src={image}
            alt={tags}
            />
        </li>
    )

}