  
module.exports = {
    name: 'joking',
    description: "tells a joke",    
    async execute(client, message, args, Discord) {
        setTimeout(function() {
            message.channel.send("Oh")
        }, 500)
        setTimeout(function() {
            let replies = ["Why can’t your nose be 12-inches long? Because it would be a foot.", "Why does Stephen Hawking do one-liners? Because he can't do stand up.", "Jesus Christ fed 2,000 people with 5 loaves of bread and 2 fish, but Adolf Hitler made 6 million Jews toast.", "Why did the golfer bring an extra pair of pants? In case he got a hole in one.", "What do you call a joke that isn’t funny? A sentence.", "What do you call 100 lawyers at the bottom of the ocean? A horrible boating accident.", "Why did the teacher tell Jamie she was wearing too much makeup? Because she was wearing too much makeup.", "What happens when you go to the bathroom in France? European.", "Why did the invisible man turn down the job offer? He couldn't see himself doing it", "How does Moses make his coffee? Hebrews it.", "Why did Jordan stay home from the party? He wasn’t invited.", "You don’t need a parachute to go skydiving. You need a parachute to go skydiving twice.", "What’s the one thing in life you can actually always count on? A calculator.", "What do sprinters eat before a race? Nothing, they fast.", "You know what they say? Words.", "Why do flamingos stand on one leg? If they lifted up the other one, they’d fall over.", "What’s blue and smells like red paint? Blue paint.", "What do you can an elephant that doesn’t matter anymore. Irrelevant", "What did the fried rice say to the shrimp? Nothing. Rice can’t talk.", "Why do you never see elephants hiding behind trees? They’re so good at it."]
                    let random = Math.floor(Math.random() * 19);
                    message.channel.send(replies[random]);
                    console.log("A joke has been tolded");
                    return
        }, 1500)
    }
}