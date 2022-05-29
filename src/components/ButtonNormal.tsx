import React from "react";
type ButtonsProps = {
    textButton: string;
}

import "../css/all.css"

export default function ButtonNormal({textButton}: ButtonsProps){
    return(
        <button className="button">{textButton}</button>
    )
}