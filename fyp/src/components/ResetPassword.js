import React, { useState, useEffect } from "react";
import axios from "axios";

function LiveLocation() {
  const [users, setUsers] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get("http://localhost:4000/api/v1/donors");
      setUsers(res.data);
      setIsLoaded(true);
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
      script.async = true;
      document.body.appendChild(script);

      window.initMap = () => {
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: { lat: 0, lng: 0 },
          zoom: 2,
        });

        const infoWindow = new window.google.maps.InfoWindow();

        users.forEach((user) => {
          const marker = new window.google.maps.Marker({
            position: { lat: user.latitude, lng: user.longitude },
            map: map,
            title: user.name,
          });

          marker.addListener("click", () => {
            const contentString = `
              <div>
                <p>Name: ${user.name}</p>
                <p>Phone Number: ${user.phone}</p>
                <p>City: ${user.city}</p>
                <p>Blood Type: ${user.bloodGroup}</p>
              </div>
            `;

            infoWindow.setContent(contentString);
            infoWindow.open(map, marker);
          });
        });
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isLoaded, users]);

  return (
    <div>
      {isLoaded ? (
        <div id="map" style={{ height: "100vh" }}></div>
      ) : (
        <p>Loading...</p>
      )}
      <p>List of Donors:</p>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} ({user.bloodType})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LiveLocation;
