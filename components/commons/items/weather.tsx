import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";

interface WeatherProps {
  location: string | undefined | any;
}

const Weather = ({ location }: WeatherProps) => {
  const weatherAPI = process.env.NEXT_PUBLIC_WEATHER_API!;

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");
  const [icon, setIcon] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${location?.latitude}&lon=${location?.longitude}&appid=${weatherAPI}&units=metric`
      )
      .then((res) => {
        const data = res.data;
        setCity(data.name);
        const NowWeather = data.weather;
        setWeather(NowWeather[0].main);
        setIcon(data.weather[0].icon);
      });
  }, [location, weatherAPI]);

  return (
    <>
      <div className="relative flex flex-col items-center  justify-center  ">
        <div className="opacity-50 h-7 ">
          <Image
            src={`http://openweathermap.org/img/wn/${icon}.png`}
            alt="Icon"
            width={50}
            height={50}
            loading="lazy"
          />
        </div>
        <p>{city}</p>
      </div>
    </>
  );
};

export default Weather;
