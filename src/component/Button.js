import React from 'react';

const ButtonElement = ({data, getWeather, city}) => {
  return (
    <div className={`buttonElement ${data === city ? "selected" : ""}`} onClick={() => getWeather(data)}>
        {data}
    </div>
  );
}

export default ButtonElement;