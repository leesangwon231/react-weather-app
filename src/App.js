import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import WeatherBox from "./component/WeatherBox";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherButton from "./component/WeatherButton";

//1. 앱이 실행되자마자 현재위치기반의 날씨가 보인다
//2. 날씨정보에는 도시,섮씨, 화씨 날시상태
//3. 5개의 버튼이 있다. 1개는 현재위치 4개는 다른도시
//4. 도시버튼 클릭할때 마다 도시별 날씨가 나온다
//5. 현재 버튼을 누른면 다시 현재 기반의 날씨가 나온다.
//6. 데이터를 들고 오는 동안 로딩스피너가 돈다.
function App() {

  const [weatherData, setWeatherData] = useState(null);
  const [city,setCity] = useState("");
  const countryList = ['Current Location','Seoul','Japan','Paris','New York']

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let apiKey = "8ce0d86cd5c3050334ec3a1223d27aca";
      if(city === "Current Location" || city === ""){
        getWeatherCurrent(lat,lon,apiKey);
      }else{
        getCityWeather(city)
      }
      console.log("get Current",weatherData)
    })
  }



  const getWeatherCurrent = (lat,lon,apiKey) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
          .then((res) => {
              setWeatherData(res.data);
          });
  }

  const getCityWeather = (city) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ce0d86cd5c3050334ec3a1223d27aca`)
        .then((res) => {
          setWeatherData(res.data);
        });
  }


  const onClickCountryButton = (countryName) => {
      setCity(countryName);
  }


  useEffect(() => {
    getCurrentLocation();
  }, [city]);



  return (
      <div className="container">
        <WeatherBox weatherData={weatherData}/>
        <WeatherButton country={countryList} getWeather={onClickCountryButton}/>
        <div className="rain">
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
          <div className="drop"></div>
        </div>
      </div>
  );
}

export default App;
