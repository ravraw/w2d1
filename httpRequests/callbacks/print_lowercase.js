const https = require('https');
const helperFunctions = require('../http-functions');

const printLowercase = dataString => {
  console.log(dataString.toLowerCase());
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

helperFunctions.getHTML(requestOptions, printLowercase);
