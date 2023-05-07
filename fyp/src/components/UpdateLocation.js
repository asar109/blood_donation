import axios from "axios";
import React, { useEffect, useState } from "react";
import Geolocation from "react-geolocation";

function UpdateLocation() {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  console.log(latitude, longitude);

  useEffect(() => {
    axios.put(
      "http://localhost:4000/api/v1/update/location/64574f9a6f58591066760c39",
      {
        longitude,
        latitude,
      }
    );
  }, [latitude, longitude]);

  const handlePosition = async (position) => {
    setLatitude(position.coords.latitude);
    setLongitude(position.coords.longitude);
  };
  return (
    <Geolocation
      onSuccess={handlePosition}
      render={({ error, isLoading }) => {
        if (isLoading) {
          return console.log(isLoading);
        }
        if (error) {
          return console.log(error);
        }
        return null;
      }}
    />
  );
}

export default UpdateLocation;
