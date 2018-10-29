const https = require('https');

function getAndPrintHTML(options) {
  /* Add your code here */
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

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);
