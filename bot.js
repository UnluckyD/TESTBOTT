const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
    console.log(`Запустился бот ${client.username}`);
});

client.on('message', msg => {
    if (msg.content === prefix + 'ping') {
        msg.reply('Pong!');
    }
});

client.login(process.env.BOT_TOKEN);