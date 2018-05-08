"use strict";

const rp = require('request-promise');
const cheerio = require('cheerio');

const options = {
  method: 'POST',
  uri: 'https://docs.google.com/forms/d/e/1FAIpQLSdsYHn67RFfiF0qYRQdynSTqC9ZYaQwVGZklXDztfi6kc_zdw/formResponse',
  formData: {
    'entry.621250416': `answer@${Date.now()}`
  }
};

rp(options)
  .then((result) => {
    const $ = cheerio.load(result);
    console.log($('body').text());
  })
  .catch((e) => {
    console.error(e);
  });
