import React from "react";
import {Bars} from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Loader() {
    return(
        <div>
            <Bars color='#3f51b5' height={70} width={200} ariaLabel="Loading" />
        </div>
    )

}