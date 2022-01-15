module.exports = {
    name: "pp",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async({client, message, args}) => {
        message.reply(`<@${message.author.id}>'s cock is ${Math.floor(Math.random() * 20)} cm long`)}
}