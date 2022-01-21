const request = require('request');
const URL = `https://api.thecatapi.com/v1/breeds/search?q=`;


const fetchBreedDescription = function(breedName, callback) {
  request(`${URL}${breedName}`, (error, response, body) => {

    if (response.statusCode >= 400) {
      callback(`\nError: ${response.statusCode}`, null);
      return;
    }
    const data = JSON.parse(body);
    if (error !== null) {
      callback(`\nError: ${error}`, null);
      return null;
    }
    if (data[0] === undefined) {
      callback(`\nCannot find breed: ${breedName}`);
      return null;
    }
    callback(null, `\n${data[0].description}`);
  });
};

module.exports = { fetchBreedDescription };