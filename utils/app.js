const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

if (!address) {
  console.log("Please provide address");
} else {
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}

// WORKING WITH CALL BACK//
// const add = (a, b, callback) => {
//   setTimeout(() => {
//     callback(a + b);
//   }, 3000);
// };
// add(2, 3, (sum) => {
//   console.log(sum);
// });
