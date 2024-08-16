import React from 'react';

const ButtonElement = ({data, getWeather}) => {
  return (
    <div className={"buttonElement"} onClick={() => getWeather(data)}>
        {data}
    </div>
  );
}

export default ButtonElement;