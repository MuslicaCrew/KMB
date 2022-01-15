const Discord = require("discord.js")

module.exports = {
    name: "help",
    category: "info",
    permissions: [],
    devOnly: false,
    run: async({client, message, args}) => {
        const embed = new Discord.MessageEmbed()
            .setColor('#ff0000') // Over here we can put the color of the embed => hex code or in caps
            .setTitle('Commands') // This is the title of the embed
            .setURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ') // This is the URL for the title
            .setAuthor('KMB', 'https://i.imgur.com/u9ndKZl.jpg') // The author comes above the title, so the first part is the text and second is the icon.. let me get a icon url
            .setDescription('All commands You can use') // this is right below the title
            .setThumbnail('https://i.imgur.com/u9ndKZl.jpg') // Thumbnail comes next to the title its a image
            .addFields(
                { name: '.pp', value: 'With this you can check your internet dick size. Nice cock!' }, // There are fields
                { name: '.ping', value: 'Pong!' }, // lets add one more field and remove the \u200b
                //{ name: '\u200B', value: '\u200B' }, // this is optional.. the \u200b is for leaving space under the first field
            )
            .addField('.love', 'Admin only. Bot will love you back') // now i will show u what the true does
            .setTimestamp() // this will give the time when the embed was sent
            .setFooter('Nehogy már az nyerjen...', 'https://i.imgur.com/u9ndKZl.jpg'); // right bellow the embed

        message.channel.send({ content: "Get `em tiger", embeds: [embed] });
    }
}