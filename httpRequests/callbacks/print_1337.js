const https = require('https');
const helperFunctions = require('../http-functions');

const print1337 = dataString => {
  let code = {
    a: '4',
    e: '3',
    l: '1',
    o: '0',
    s: '5',
    t: '7',
    ck: 'x',
    er: '0r',
    you: 'j00'
  };
  console.log(dataString);
};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

helperFunctions.getHTML(requestOptions, print1337);
