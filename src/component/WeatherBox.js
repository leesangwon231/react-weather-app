import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const WeatherBox = ({weatherData,weather,loading}) => {
    let weatherSmall = weather.toLowerCase();
    let temp = weatherData?.main.temp.toFixed(2);
    let fahrenheit = ((weatherData?.main.temp) * 9 / 5 + 32).toFixed(2);
    return (
        <div className={"weatherBox"}>
            {loading ? (
                <ClipLoader
                    color={"#f88c6b"}
                    loading={loading}
                    size={150}
                />
            ) : (
                // 하나의 부모 요소로 감싸서 반환합니다.
                <div>
                    <div className={"name"}>{weatherData?.name}</div>
                    <div className={"weatherDescription"}>{weatherData?.weather[0].description}</div>
                    <div className={"temp"}>{temp}°C/{fahrenheit}°F</div>
                </div>
            )}
        </div>
    )
}

export default WeatherBox;