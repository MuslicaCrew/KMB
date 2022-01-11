const Discord = require("discord.js")
require ("dotenv").config()

const TOKEN = "OTMwNDMxOTY1MjUxOTA3NTk1.Yd1ySw.L5_LRy7KrnR5eZpcHs90jQr7Pv4"

const client = new Discord.Client({
    intents: [
    "GUILDS",
    "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) =>{
    if (message.content == "Hi"){
        message.reply("Szeretlek Tonton! <3")
    }
})

client.login(process.env.TOKEN)