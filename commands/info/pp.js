module.exports = {
    name: "pp",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async({client, message, args}) => {
        let ppsize = Math.floor(Math.random() * 20)
        let ppsizeplus = 0
        if (message.author.id == 147043101318316032){
            ppsizeplus = ppsize + 10
            message.reply(`<@${message.author.id}>'s cock is ${ppsizeplus} cm long`)
            message.reply("Úr Isten very big")
        }else {
            message.reply(`<@${message.author.id}>'s cock is ${ppsize} cm long`)
        }
    }
}