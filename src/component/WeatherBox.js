import React from 'react'

const WeatherBox = ({weatherData}) => {
    return (
        <div className={"weatherBox"}>
            <div>{weatherData?.name}</div>
            <div>{weatherData?.weather[0].description}</div>
        </div>
    )
}

export default WeatherBox;