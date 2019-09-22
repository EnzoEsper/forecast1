const request = require("request");

const url =
  "https://api.darksky.net/forecast/6bdd458cf66ebca744d51b76b29c6133/37.8267,-122.4233?units=si&lang=es";

request({ url: url, json: true }, (error, response) => {
  console.log(
    `${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. There is a ${response.body.currently.precipProbability}% chance of rain`
  );
});
