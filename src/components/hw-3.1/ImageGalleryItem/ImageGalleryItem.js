import React from 'react';
import s from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({hits}) => {
    const items = hits.map((item)=><li key={item.id} className={s.ImageGalleryItem} id={item.id}>
        <img className={s.ImageGalleryItemImage} src={item.webformatURL } alt="img"/>
    </li>)
    return (
            <div>
                <ul className={s.ImageGallery}>
                    {items}
                </ul>
            </div>
    );
};
export default ImageGalleryItem;