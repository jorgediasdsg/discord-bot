//   Class Make bot Discord
//   https://youtu.be/KYnXhtyqQRQ
//   https://discord.com/developers/applications/
//   Add bot discordapp.com/oauth2/authorize?=&client_id=###&scope=bot&permissions=8

const Discord = require("discord.js");
const client = new Discord.client();
const config = require("./config.json")

client.on("ready", () => {
    console.log(`Bot foi iniciado com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores`)
    client.user.setGame(`Eu estou em ${client.guilds.size} servidores`)
})