const request = require('request');
let args = process.argv.splice(2);
const theCatAPI = 'https://api.thecatapi.com/v1/breeds/search?q=';

request(`${theCatAPI}${args[0]}`, (error, response, body) => {
  if (error || response.statusCode >= 400) {
    console.log(`\nThere seems to be a problem with your URL :(`);
    return;
  }
  const data = JSON.parse(body);
  if (error !== null) {
    console.log('\nerror:', error);
    return;
  }

  if (data[0] === undefined) {
    console.log("\nThere is no such breed on our database");
    return;
  }
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('\nDescription:  ', data[0].description);
});