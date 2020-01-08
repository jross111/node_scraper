const request = require('request');
const cheerio = require('cheerio');

console.log('hello');
request('https://www.robinwieruch.de/', (response, error, html) => {
	const $ = cheerio.load(html);
	const title = $('h1');
	console.log(title.text);
});
