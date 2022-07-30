import React from "react";

export default function Error() {
    const imgUrl = 'https://st.depositphotos.com/1575949/4950/v/950/depositphotos_49506497-stock-illustration-error-red-stamp-text.jpg'
    return(
        <div>
            <img src={imgUrl} alt='Ошибка' />
            <h2>Нет такой картинки, попробуйте найти что то другое</h2>
        </div>
    )

}