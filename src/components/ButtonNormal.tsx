import React from "react";
type ButtonsProps = {
    textButton: string,
    colorBtn: string;
}

import "../css/all.css"

export default function ButtonNormal({ textButton, colorBtn }: ButtonsProps) {
    return (
        <button style={{
            background: colorBtn,
            fontSize: "20px",
            color: "white",
            cursor: "pointer",
            padding: "6px 12px",
            borderRadius: "2px",
            border: "1px solid transparent",
        }}>{textButton}</button>
    )
}