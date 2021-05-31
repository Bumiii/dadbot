const discord = require("discord.js")

module.exports = {
    name: 'messaging',
    description: "messages people",
    async execute(client, message, args, Discord) {
        setTimeout(function () {
        //     message.channel.send("Oh")
        // }, 500)
        // setTimeout(function () {
            target = message.mentions.users.first();
            text = message.content.split("> ");
            user = message.author.username;
            message.delete();
            const embed = new discord.MessageEmbed()
                .setColor('#e5c37c')
                .setTitle(`Message from ${user}`)
                .setDescription(text[1]);
            target.send(embed);
            message.reply("The message has been sent.");
            console.log("Command executed");
        }, 1500)
    }
}