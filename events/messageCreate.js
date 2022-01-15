const Discord = require("discord.js")

module.exports = {
    name: "messageCreate",
    run: async function runALL(bot, message){
        const {client, prefix, owners} = bot
        const doge  = "https://i.imgur.com/Joh2nlV.jpg"

        if (!message.guild) return
        if (message.author.bot) return
        if (message.content.includes("nci")){
            message.reply("Bro ez cringe volt https://i.imgur.com/Joh2nlV.jpg")          
        }
        if (message.author.id == 311871697722671106){
            message.reply("Na most hol az istened?")
        }
        if (!message.content.startsWith(prefix)) return
        

        const args = message.content.slice(prefix.length).trim().split(/ +/g)
        const cmdstr = args.shift().toLowerCase()

        let command = client.commands.get(cmdstr)
        if (!command) return

        let member = message.member

        if(command.devOnly && !owners.includes(member.id)){
            return message.reply("This command is only available to the bot owners")
        }

        if (command.permissions && member.permissions.missing(command.permissions).length !== 0){
            return message.reply("You do not have permission to use this command")
        }

        try {
            await command.run({...bot, message, args})
        }
        catch (err) {
            let errMsg = err.toString()
            if (errMsg.startsWith("?")) {
                errMsg = errMsg.slice(1)
                await message.reply(errMsg)
            }else
                console.error(err)
            }
    }
}