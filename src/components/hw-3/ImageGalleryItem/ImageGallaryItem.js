import React from "react";
import css from './ImageGalleryItem.module.css'

export default function ImageGallaryItem({data}) {

    return (
        data.map(el => {
            return (
                <li className={css.ImageGalleryItem} key={el.id}>
                    <img
                        className={css.ImageGalleryItemImage}
                        src={el.webformatURL}
                        alt={el.tags}
                    />
                </li>
            )
        })
    )

}