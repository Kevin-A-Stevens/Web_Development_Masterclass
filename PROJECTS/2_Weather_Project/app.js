const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const query = req.body.cityName;
  const appID = "fe283a5194cb33e8da39dbddb884ba33";
  const units = "imperial";
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    query +
    "&appid=" +
    appID +
    "&units=" +
    units;
  https.get(url, function (response) {
    console.log(response.statusCode);

    response.on("data", function (data) {
      const weatherData = JSON.parse(data);
      const temp = weatherData.main.temp;
      const feelsLike = weatherData.main.feels_like;
      const tempMin = weatherData.main.temp_min;
      const tempMax = weatherData.main.temp_max;
      const description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

      res.write("<p>The weather is currently " + description + "</p>");
      res.write("<p>The min temperature is " + tempMin + "</p>");
      res.write("<p>The max temperature is " + tempMax + "</p>");
      res.write("<p>The feels like temp is currently " + feelsLike + "</p>");
      res.write(
        "<h1>The temperature in " + query + " is " + temp + " degrees</h1>"
      );
      res.write("<img src=" + imageURL + "/>");
      res.send();

      console.log(weatherData);
      console.log(temp);
      console.log(feelsLike);
      console.log(tempMin);
      console.log(tempMax);
      console.log(icon);
      console.log(description);
    });
  });
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});

// fe283a5194cb33e8da39dbddb884ba33
// https://openweathermap.org/
