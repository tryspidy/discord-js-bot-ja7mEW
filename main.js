//first you must install dicord.js by running the command: npm install discord.js
//once u do that copy and paste this into your main file
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () =>{
	client.user.setStatus('your status')
	console.log('Connected!')
})
//rest of your code

//always remember to never share your token with anyone
client.login('your-token-here')