const request = require('request');
const cheerio = require('cheerio');

console.log('hello');
request(
	'https://bitcointalk.org/index.php?action=profile;u=538922',
	(response, error, html) => {
		console.log(html);
	}
);
