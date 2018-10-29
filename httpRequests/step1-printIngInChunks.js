// use https mode from node.js to make request
const https = require('https');
// function to make requests
const getAndPtrintHTMLChunks = () => {
  //request options
  const requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  // making request
  https.get(requestOptions, res => {
    // set response encoding to UTF8
    res.setEncoding('UTF8');
    // output data recieved
    res.on('data', data => {
      console.log(`${data} \n`);
    });
    //log message to completion of response
    res.on('end', () => {
      console.log('Successfuly read the data');
    });
  });
};

getAndPtrintHTMLChunks();
