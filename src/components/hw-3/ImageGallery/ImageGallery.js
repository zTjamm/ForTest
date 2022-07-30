import React from "react";
import css from "./ImageGallery.module.css"
import ImageGallaryItem from "../ImageGalleryItem/ImageGallaryItem";

export default function ImageGallery({hits,onImageClick}) {
    return(

            <ul className={css.ImageGallery}>
                {hits.map(({id, largeImageURL, webformatURL, tags})=>(
                    <ImageGallaryItem
                    onModal={onImageClick}
                    key={id}
                    image={webformatURL}
                    tags={tags}
                    largeImageURL={largeImageURL}
                    />
                ))}
            </ul>
    )
}