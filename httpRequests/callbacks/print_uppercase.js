const https = require('https');
const helperFunctions = require('../http-functions');

const printUppercase = dataString => {
  console.log(dataString.toUpperCase());
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

helperFunctions.getHTML(requestOptions, printUppercase);
