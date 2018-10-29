// use https mode from node.js to make request
const https = require('https');
const fs = require('fs');
// function to make requests
const getAndPtrintHTMLChunks = () => {
  let dataRecieved = '';
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
    res.on('data', chunk => {
      console.log(`${chunk} \n`);
      console.log(`Chunk Received. Length:, ${chunk.length} \n`);
      dataRecieved += chunk;
    });

    // log error
    res.on('error', err => {
      console.error(err.stack);
    });

    //log message to completion of response
    res.on('end', () => {
      console.log('No more chunkread the data');

      // Create a writable stream
      var writerStream = fs.createWriteStream('step1-output.txt');
      // Write the data to stream with encoding to be utf8
      writerStream.write(dataRecieved, 'UTF8');

      // Mark the end of file
      writerStream.end();

      // error
      writerStream.on('error', function(err) {
        console.log(err.stack);
      });

      // Handle stream events --> finish, and error
      writerStream.on('finish', function() {
        console.log('Write completed.');
      });

      console.log('Program Ended');
    });
    // finish
    res.on('finish', () => {});
  });
};

getAndPtrintHTMLChunks();
