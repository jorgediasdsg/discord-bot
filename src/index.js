//   Class Make bot Discord
//   https://youtu.be/KYnXhtyqQRQ
//   https://discord.com/developers/applications/
//   Add bot discordapp.com/oauth2/authorize?=&client_id=###&scope=bot&permissions=8

const Discord = require("discord.js");
const client = new Discord.Client();
const Jimp = require("jimp")
const config = require("../config.json")


client.on("ready", () => {
  console.log(`The bot was started, with ${client.users.cache.size} users and connnected at ${client.guilds.cache.size} servers.`);
  client.user.setActivity(`Chezz at ${client.guilds.cache.size} servers!`, { type: 'PLAYING' });(`I am at ${client.guilds.cache.size} servers`);
});

client.on("guildCreate", guild => {
    console.log(`The bot enter in this server: ${guild.name} (ID server: ${guild.id}). ${guild.memberCount} members`);
    client.user.setActivity(`Estou em ${client.guilds.cache.size} servidores.`);
});

client.on("guildDelete", guild => {
    console.log(`The bot was removed in the server: ${guild.name} (ID server: ${guild.id})`);
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
    let channel = client.channels.cache.get(config.channel_welcome)
    let font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK)
    let mask = await Jimp.read("./img/mask.png")
    let background = await Jimp.read('./img/background.png')

    Jimp.read(member.user.displayAvatarURL().replace('webp','png'))
    .then(avatar => {
        avatar.resize(130, 130);
        mask.resize(130, 130);

        avatar.mask(mask)

        background.print(font, 170, 175, member.user.username)
        background.composite(avatar, 40, 90).write('./img/welcome.png');
        channel.send(``, { files: ["./img/welcome.png"] } )
        console.log(`${member.user.username} enter in the server and image was send to discord`)
    })
    .catch(err => {
        console.log("Channel: "+channel+"/ font: "+font+" /mask:"+mask+" /back"+background)
        console.log("AvatarURL:"+member.user.displayAvatarURL())
        console.log(avatar)
        console.log("Username:"+member.user.username)
        console.log("Error loading image!")
        console.log(err)
    });
})

client.login(config.token);