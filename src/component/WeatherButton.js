import React from 'react'
import {Button} from "react-bootstrap";
import ButtonElement from "./Button";

const WeatherButton = ({country, getWeather}) => {


    return (
        <div className={"buttonArea"}>
            {country.map((data,index) => (
                <ButtonElement key={index} data = {data} getWeather = {getWeather} />
            ))}

        </div>
    )
}

export default WeatherButton;