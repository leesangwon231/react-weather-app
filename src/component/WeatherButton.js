import React, {useState} from 'react'
import {Button} from "react-bootstrap";
import ButtonElement from "./Button";

const WeatherButton = ({country, getWeather,city}) => {


    return (
        <div className={"buttonArea"}>
            {country.map((data,index) => (
                <ButtonElement key={index} data = {data} getWeather = {getWeather} city = {city} />
            ))}

        </div>
    )
}

export default WeatherButton;