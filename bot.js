const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';

client.on('ready', () => {
    console.log(`Запустился бот - ${client.user.username}`);
    client.generateInvite(["ADMINISTRATOR"]).then(link => {
        console.log(link);
    })
});

client.on('message', msg => {
    if (msg.content === prefix + 'ping') {
        msg.reply('Pong!');
    }
});

client.login(process.env.BOT_TOKEN);