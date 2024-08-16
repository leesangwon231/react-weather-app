import React from 'react'

const WeatherBox = ({weatherData,weather}) => {

    let weatherSmall = weather.toLowerCase();
    let temp = weatherData.main.temp;
    let fahrenheit = (weatherData.main.temp)* 9/5+32;
    return (
        <div className={"weatherBox"}>
            <div className={"name"}>{weatherData?.name}</div>
            <div className={"weatherDescription"}>{weatherData?.weather[0].description}</div>
            <div className={"temp"}>{temp}°C/{fahrenheit}°F</div>
            <div></div>
        </div>
    )
}

export default WeatherBox;