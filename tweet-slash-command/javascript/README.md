# Slack Tweets
A /tweet custom slash command for Slack that posts to Twitter

## Slack Configuration
1. Create a new 'Tweet' app in Slack
2. Enable slash commands
3. Add new `/tweet` command

## Dev Configuration

### 1. Create an .env file

	TOKEN=VALUE  
	PORT=VALUE
	
### 2. Install dependencies

	npm install  
		
### 3. Start local webserver

	npm start
		
### 4. Port forwarding
Download and start ngrok

	ngrok http 3000
		
While developing locally, edit the command in Slack and replace the base of the Replace Url with the Forwarding Url
		
	Forwarding 	https://d8ab065c.ngrok.io -> localhost:3000