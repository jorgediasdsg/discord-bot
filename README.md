<h1 align="center">:rocket: Trainning: Use API Discord :rocket:</h1>

<p align="center">This is a personal training project for the Rocketseat GoStack course. In this project we will be consuming the Discord API using NodeJS and a lot of javascript.</p>

<p align="center">
 <a href="#objective">Objective</a> •
 <a href="#technologies">Technologies</a> •
 <a href="#how-to-run">How to run the application</a>
</p>

<h1 id="objective">:bulb: Objective</h1>

The goal is simple, just a discord bot consume the api, use a node to connect to the discord server, respond to a ping command in the chat with the response time, and when someone enters the server create an image with some layers as a background mask and a avatar, and then put the message 'welcome', after creating the image send the chat message to the new member.

Resume:
Training node, express and discord.js.

</p>

<h1 id="technologies">:rocket: Technologies</h1>

<p>It was used these technologies in this trainning.</p>

- [Node.js](https://nodejs.org/en/ "Node.js")
- [Express](http://expressjs.com/ "Express")
- [Discord.JS](https://discord.js.org/ "Discord.JS")
- [Jimp](https://github.com/oliver-moran/jimp/ "Jimp")

<h1 id="how-to-run">:computer: How to run the application</h1>

<h2>Pre Requirements</h2>

<h4>You will need these tools instaled in your machine:</h4>

- [Node.js](https://nodejs.org/en/ "Node.js")
- [Yarn](https://yarnpkg.com/ "Yarn")
- [Git](https://git-scm.com/ "Git")

<h4>You will need too a bot discord and copy bot key to config.json</h4>

- [Create Bot discord 'Video'](https://youtu.be/gcMLieVU7y4 "Bot discord")

- [Create bot Discord 'Tutorial'](https://www.writebots.com/discord-bot-token/ "Bot discord")
   
<h4>You will need copy room chat channel id to config.json</h4>

<p>To get your Server ID right click on the server icon on the left hand sidebar then click on “Copy ID” then paste it into channel_welcome at config.json file.</p>


```bash
# Clone this repository
$ git clone git@github.com:jorgediasdsg/discord-bot.git

# Go into the folder of the project
$ cd discord-bot

# Install the dependencies
$ yarn

# Copy ans edit enviroments **Important!**
$ mv .sample.config.json config.json

#If you want to run the project
node src/index.js
```
<hr>

@jorgediasdsg 2020
