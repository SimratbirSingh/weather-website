const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    "http://api.positionstack.com/v1/forward?access_key=cfb8ad7abff4c3cb635daec017d1c1e3&query=" +
    encodeURIComponent(address) +
    "%20&limit=1";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to location serivices!", undefined);
    } else if (!body.data) {
      callback("Unable to find location. Try another search.", undefined);
    } else {
      callback(undefined, {
        latitude: body.data[0].latitude,
        longitude: body.data[0].longitude,
        location: body.data[0].name,
      });
    }
  });
};

module.exports = geocode;
