#!/usr/bin/node

const req = require('request');
const url = 'https://swapi-api.hbtn.io/api/films/' + process.argv[2];

function getname (url) {
  const promise = new Promise(function (resolve, reject) {
    req(url, function (err, res, body) {
      if (err) reject(err);
      else resolve(JSON.parse(body).name);
    });
  });
  return promise;
}

req(url, async function (error, response, body) {
  if (error) {
    console.error(error);
  } else {
    const jsObj = (JSON.parse(body));
    const chars = jsObj.characters;
    for (const url of chars) {
      const name = await getname(url);
      console.log(name);
    }
  }
});
