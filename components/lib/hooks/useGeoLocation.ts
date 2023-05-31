import { useState, useEffect } from "react";

interface ILocation {
  latitude: number;
  longitude: number;
}

export const useGeoLocation = (option = {}) => {
  const [location, setLocation] = useState<ILocation>();
  const [error, setError] = useState("");

  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords;
    setLocation({
      latitude,
      longitude,
    });
  };
  const handleError = (err: GeolocationPositionError) => {
    setError(err.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;
    if (!geolocation) return setError("Geolocation is not supported");

    geolocation.getCurrentPosition(handleSuccess, handleError, option);
  }, [option]);
  return { location, error };
};
