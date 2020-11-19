const http = require('http');
const axios = require('axios');

// API specific settings.

const server = http.createServer((request, response) => {
  // magic happens here!
  console.log('inside server');
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather?zip=';
const API_KEY = 'edad68677ae7ad8353d2bdd165bad59a';

const LOCATION_ZIP_CODE = '90001';
const COUNTRY_CODE = 'us';
var status;
const ENTIRE_API_URL = `${API_URL}${LOCATION_ZIP_CODE},${COUNTRY_CODE}&appid=${API_KEY}`;
  axios.get(ENTIRE_API_URL)
    .then(response => { status = response.status ; console.log(response.status)})
    .catch(error => console.log('Error', error));
response.end('Status --'+status);
}).listen(8081);
