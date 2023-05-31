import React, { useEffect, useState } from "react";
import { useGeoLocation } from "../../lib/hooks/useGeoLocation";
import axios from "axios";

const geolocationOption = {
  enableHightAccuracy: true,
  timeout: 1000 * 10,
  maximumAge: 1000 * 3600 * 24,
};

const Weather = () => {
  const { location, error } = useGeoLocation(geolocationOption);
  const weatherAPI = process.env.NEXT_PUBLIC_WEATHER_API!;

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("");

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
      });
  }, []);

  return (
    <div className="pl-5 flex gap-3">
      {location && (
        <>
          <p>{city}</p>
          <p>{weather}</p>
        </>
      )}
    </div>
  );
};

export default Weather;
