// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');
console.log('Downloading image.......');
request
  .get('https://sytantris.github.io/http-examples/future.jpg') // Note 1
  .on('error', function(err) {
    throw err;
  })
  .on('response', function(response) {
    // destructure the required variables
    const {
      statusCode,
      statusMessage,
      headers: { 'content-type': contentType }
    } = response;
    // log the variables
    console.log({ statusCode, statusMessage, contentType });
  })
  .pipe(fs.createWriteStream('./future.jpg'))
  // use finish event to print the last console.log
  .on('finish', () => {
    console.log('Download complete.......');
  });
