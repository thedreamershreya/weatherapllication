import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import errorStyle from './Error.module.css'

const Error =()=>{
    const navigate = useNavigate()
    const goBack = ()=>{
        navigate('/')
    }
    return(
        <div className={errorStyle.error}>
        <h1>Page not found</h1>
        <Button type='reset' onClick={goBack} >HOME</Button>
        
        </div>
        
    )
}

export default Error