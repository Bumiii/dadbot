module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(client, message, args, Discord){
        setTimeout(function(){
            message.channel.send('Oh');
        }, 500);
        setTimeout(function(){
            message.channel.send('Pong my son');
        }, 1500);
        console.log("Command executed");
    }
}