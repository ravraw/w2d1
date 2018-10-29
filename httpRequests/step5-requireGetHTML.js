const https = require('https');
const helperFunctions = require('./http-functions');

function printHTML(html) {
  return console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

helperFunctions.getHTML(requestOptions, printHTML);
