const request = require("request");

const url =
  "https://api.darksky.net/forecast/6bdd458cf66ebca744d51b76b29c6133/37.8267,-122.4233";

request({ url: url }, (error, response) => {
  const data = JSON.parse(response.body);
  console.log(data.currently);
});
