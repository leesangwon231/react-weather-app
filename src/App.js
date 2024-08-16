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
  const [weather,setWeather] = useState("");
  const [city,setCity] = useState("");
  const countryList = ['Current Location','Seoul','Japan','Paris','New York']

  const getCurrentLocation = () => {

     Array.from(document.getElementsByClassName("backGround"))[0].querySelectorAll("div").forEach((item) => {
          item.remove();
      });
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let apiKey = "8ce0d86cd5c3050334ec3a1223d27aca";
      if(city === "Current Location" || city === ""){
        getWeatherCurrent(lat,lon,apiKey);
      }else{
        getCityWeather(city)
      }
    })
  }



  const getWeatherCurrent = (lat,lon,apiKey) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`)
          .then((res) => {
              setWeatherData(res.data);
              setWeather(res.data.weather[0].main);
          });
  }

  const getCityWeather = (city) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ce0d86cd5c3050334ec3a1223d27aca`)
        .then((res) => {
          setWeatherData(res.data);
          setWeather(res.data.weather[0].main);
        });
  }


  const onClickCountryButton = (countryName) => {
      setCity(countryName);
  }



  useEffect(() => {
    getCurrentLocation();
      if(weather === "Rain"){
          const background = document.querySelector('.backGround');
          for (let i = 0; i < 6; i++) {
              const drop = document.createElement("div");
              drop.className = "drop";
              background.appendChild(drop);
          }
      }else{
          const background = document.querySelector('.backGround');
          for (let i = 0; i < 6; i++) {
              const wind = document.createElement("div");
              wind.className = "sunrise";
              background.appendChild(wind);
          }
      }
  }, [city,weather]);


  return (
      <div className="container">
          <WeatherBox weatherData={weatherData} weather = {weather}/>
          <WeatherButton country={countryList} getWeather={onClickCountryButton}/>
          <div className={`backGround ${weather}`}>

          </div>
      </div>
  );
}

export default App;
