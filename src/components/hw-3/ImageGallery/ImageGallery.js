import React from "react";
import css from "./ImageGallery.module.css"
import ImageGallaryItem from "../ImageGalleryItem/ImageGallaryItem";

export default function ImageGallery({data}) {
    if(data.length === 0){
        return <h1 style={{textAlign: 'center'}}>No images</h1>
    }
    return(
        <div>
            <ul className={css.ImageGallery}>
                <ImageGallaryItem data={data} />
            </ul>
        </div>

    )
}