// import React, { useState } from 'react';

// function Location() {
//   const [position, setPosition] = useState(null);

//   const getLocation = () => {
//     if (navigator.geolocation) {
//       navigator.geolocation.watchPosition((position) => {
//         setPosition({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       });
//     } else {
//       alert('Geolocation is not supported by this browser.');
//     }
//   };

//   return (
//     <div>
//       <button onClick={getLocation}>Get location</button>
//       {position && (
//         <p>
//           Latitude: {position.latitude}, Longitude: {position.longitude}
//         </p>
//       )}
//     </div>
//   );
// }

// export default Location;
















// import { useState, useEffect } from "react";

// function Location() {
//   const [position, setPosition] = useState(null);

//   useEffect(() => {
//     const watchId = navigator.geolocation.watchPosition(
//       (pos) => {
//         const { latitude, longitude } = pos.coords;
//         setPosition({ latitude, longitude });
//       },
//       (err) => console.log(err),
//       { enableHighAccuracy: true }
//     );

//     return () => navigator.geolocation.clearWatch(watchId);
//   }, []);

//   if (!position) return <div>Loading...</div>;

//   return (
//     <div>
//       <p>Latitude: {position.latitude}</p>
//       <p>Longitude: {position.longitude}</p>
//     </div>
//   );
// }

// export default Location;










































// import React, { useState, useEffect } from 'react';

// const LocationCompnent = () => {
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);

//   useEffect(() => {
//     if (navigator.geolocation) {
//       navigator.geolocation.watchPosition((position) => {
//         setLatitude(position.coords.latitude);
//         setLongitude(position.coords.longitude);
//       }, (error) => {
//         console.log(error);
//       });
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Your Location:</h1>
//       {latitude && longitude ? (
//         <p>
//           Latitude: {latitude.toFixed(4)}, Longitude: {longitude.toFixed(4)}
//         </p>
//       ) : (
//         <p>Loading location...</p>
//       )}
//     </div>
//   );
// };

// export default LocationCompnent;
