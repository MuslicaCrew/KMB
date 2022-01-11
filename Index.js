const Discord = require("discord.js")
require ("dotenv").config()

const generateImage = require("./generateImage") 

const TOKEN = "OTMwNDMxOTY1MjUxOTA3NTk1.Yd1ySw.L5_LRy7KrnR5eZpcHs90jQr7Pv4"

const client = new Discord.Client({
    intents: [
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MEMBERS",
    "GUILD_EMOJIS_AND_STICKERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) =>{
    if (message.content == "Hi"){
        message.reply(`Szeretlek <@${message.author.id}>! :heart:`)
   }
})

const welcomeChannelId = "930437875269505094"

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelId).send({
        content: `<@${member.id}> Welcome to the server`,
        files: [img]
    })
})

client.login(process.env.TOKEN)