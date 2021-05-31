module.exports = (Discord, client, message) => {

    if (message.author.bot || message.channel.type === 'dm') {
        message.author.send("Sorry sonny I Don't talk in dms");
        return;
    }
    
    const prefix = "I'm ";
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if (command) command.execute(client, message, cmd, args, Discord);
    text = message.content.slice(4);
    message.channel.send(`Hi ${text}, I'm Dad`);
}