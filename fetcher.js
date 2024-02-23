const url = process.argv.slice(2);
const filePath = process.argv.slice(3);
const request = require('request');
const fs = require('fs');


const fetch = function(url, filePath) {

  request(`${url}`, (error, response, body) => {
    const content = body;
    fs.writeFile(`${filePath}`, content, err => {
      if (err) {
        console.error(err);
      } else {
        // file written successfully
        console.log(`Downloaded and saved ${content.length} bytes to ${filePath}`);
      }
    });
  });
};

fetch(url, filePath);