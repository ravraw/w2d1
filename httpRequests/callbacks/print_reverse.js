const https = require('https');
const helperFunctions = require('../http-functions');

const printReverse = dataString => {
  console.log(
    dataString
      .split('')
      .reverse()
      .join('')
  );
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

helperFunctions.getHTML(requestOptions, printReverse);
