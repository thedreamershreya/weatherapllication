import React from "react";
import inputStyle from './Input.module.css';

const Input = (props)=>{
    return(
        <div className={inputStyle.form}>
            <label htmlFor={props.name}>{props.name}: </label>
            <input {...props} className={inputStyle.input}/>
        </div>
    )
}

export default Input