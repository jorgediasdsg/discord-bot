//   Class Make bot Discord
//   https://youtu.be/KYnXhtyqQRQ
//   https://discord.com/developers/applications/
//   Add bot discordapp.com/oauth2/authorize?=&client_id=###&scope=bot&permissions=8

const Discord = require("discord.js");
const client = new Discord.Client();
const Jimp = require("jimp")
const config = require("../config.json")


client.on("ready", () => {
  console.log(`O bot foi iniciado, com ${client.users.cache.size} usuários e em ${client.guilds.cache.size} servidores.`);
  client.user.setActivity(`xadrez em ${client.guilds.cache.size} servidores!`, { type: 'PLAYING' });(`Eu estou em ${client.guilds.cache.size} servidores`);
});

client.on("guildCreate", guild => {
    console.log(`O bot entrou no servidor: ${guild.name} (ID do servidor: ${guild.id}). Membros: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.cache.size} servidores.`);
});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (ID do servidor: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.cache.size} servers`);
});

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLocaleLowerCase();

    if ( comando === "ping") {
        const m = await message.channel.send("Ping?");
        m.edit(`Pong! A latência é ${m.createdTimestamp - message.createdTimestamp}ms.`);

    }

});

client.on("guildMemberAdd", async member => {
    let channel = client.channels.cache.get("743537137093181614")
    let font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK)
    let mask = await Jimp.read('../mask.png')
    // let avatar = await Jimp.read('./img/Goofy.png')
    let background = await Jimp.read('../background.png')
    Jimp.read(member.user.displayAvatarURL())
    .then(avatar => {

        avatar.resize(130, 130);
        mask.resize(130, 130);

        avatar.mask(mask)

        background.print(font, 170, 175, member.user.username)
        background.composite(avatar, 40, 90).write('welcome.png');
        channel.send(``, { files: ["welcome.png"] } )
        console.log("Image was send to discord.")
    })
    .catch(err => {
        console.log("Channel: "+channel+"/ font: "+font+" /mask:"+mask+" /back"+background)
        console.log("AvatarURL:"+member.user.displayAvatarURL)
        console.log("Username:"+member.user.username)
        console.log("Error loading image!")
    });
})

client.login(config.token);