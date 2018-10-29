const https = require('https');
const fs = require('fs');

function getAndPrintHTML() {
  let responseData = '';
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };
  // make request
  https.get(requestOptions, res => {
    res.setEncoding('UTF8');

    // error
    res.on('error', function(err) {
      console.log(err.stack);
    });

    // output data recieved
    res.on('data', chunk => {
      console.log(`Chunk Received. Length:${chunk.length} \n`);
      responseData += chunk;
    });

    res.on('end', () => {
      console.log('No more data ...');
      console.log('Printing out data ......');
      console.log(responseData);
    });
  });
}

getAndPrintHTML();
