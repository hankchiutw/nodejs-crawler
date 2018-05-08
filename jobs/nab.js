"use strict";

const rp = require('request-promise');

const options = {
  method: 'GET',
  uri: 'http://api.nab.com.au/info/nab/location/locationType/brc/queryType/geoCluster/-45.26707263800673/98.26732349999997/-1.3950091363281787/169.28294849999997/1/4000',
  qs: {
    v: '1'
  },
  headers: {
    'user-agent': 'request-promise',
		'x-nab-key': 'a8469c09-22f8-45c1-a0aa-4178438481ef'
  },
  json: true
};

rp(options)
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.error(e);
  });
