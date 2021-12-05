import React from "react";


export default function Input(props){
const {placeholder} = props
    return(
        <div>
            <input placeholder={placeholder} className="partner_input"/>
        </div>
    )
}