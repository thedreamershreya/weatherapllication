import React from "react";


const City = ({ name, main }) => {

    // console.log(main)

    return (
        <div>
            <h1>{name}</h1>
            <h2>{Math.round(main?.temp)} °C</h2>
            <p>Max: {Math.round(main?.temp_max)} °C &ensp; Min: {Math.round(main?.temp_min)} °C</p>
        </div>
    )
};

export default City;
