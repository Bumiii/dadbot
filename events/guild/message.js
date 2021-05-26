module.exports = (Discord, client, message) =>{
    const prefix = "I'm ";
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(command) command.execute(client, message, cmd, args, Discord);
    text = message.content.slice(4);
    message.channel.send(`Hi ${text}, I'm Dad`);
}