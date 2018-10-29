// export getHTML function
const https = require('https');

module.exports.getHTML = function getHTML(options, callback) {
  /* Add your code here */
  let responseData = '';
  // make request
  https.get(options, res => {
    res.setEncoding('UTF8');

    // error
    res.on('error', function(err) {
      console.log(err.stack);
    });

    // output data recieved
    res.on('data', chunk => {
      responseData += chunk;

      console.log('in data');
    });
    // end
    res.on('end', () => callback(responseData));
  });
  console.log(responseData);
};
