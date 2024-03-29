const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiZW56b2VzcGVyIiwiYSI6ImNrMHZpMjk0ZjB4cGozZW4wbjFsc3Z5cG4ifQ.T1Xp6VrY7xhSuvVKgthm9w&limit=1`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("No se puede conectar al servicio de ubicacion", undefined);
    } else if (response.body.features.length === 0) {
      callback(
        "No se encuentra la ubicacion provista. Prueba otra busqueda.",
        undefined
      );
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
