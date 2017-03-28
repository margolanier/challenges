// define app token
require('dotenv').config();
const Token = process.env.TOKEN;
const Port = process.env.PORT;

// set up slash command constructor
const SlashCommand = function(command, message) {
	this.command = command;
	this.message = message;
	
	return this;
}

// create new 'Tweet' slash command
const Tweet = new SlashCommand('tweet', 'handling your tweet');

// when tweet command is prompted by user...
const prompt = '';

const sendTweet = () => {
	let request = new XMLHttpRequest();
	request.open('POST', Port);
	
	request.addEventListener('load', function() {
		let response = JSON.parse(request.responseText);
		console.log(response);
	});
	
	request.send();
};

const ts = require('tinyspeck');
let slack = ts.instance({
	token: Token
});

// incoming http requests
slack.listen(Port);
