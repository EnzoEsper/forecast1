const request = require("request");

// const url =
//   "https://api.darksky.net/forecast/6bdd458cf66ebca744d51b76b29c6133/37.8267,-122.4233?units=si&lang=es";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("No se puede acceder al servicio del clima");
//   } else if (response.body.error) {
//     console.log("No se puede encontrar la ubicacion");
//   } else {
//     console.log(
//       `${response.body.daily.data[0].summary} La temperatura actual es de ${response.body.currently.temperature} grados. Hay una probabilidad de ${response.body.currently.precipProbability}% de precipitaciones`
//     );
//   }
// });

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZW56b2VzcGVyIiwiYSI6ImNrMHZpMjk0ZjB4cGozZW4wbjFsc3Z5cG4ifQ.T1Xp6VrY7xhSuvVKgthm9w&limit=1";

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("No se puede conectar al servicio de ubicacion");
  } else if (response.body.features.length === 0) {
    console.log("No se encuentra la ubicacion provista. Prueba otra busqueda.");
  } else {
    console.log(
      `Longitude: ${response.body.features[0].center[0]}, Latitude: ${
        response.body.features[0].center[1]
      } `
    );
  }
});
