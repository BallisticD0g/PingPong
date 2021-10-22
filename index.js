import DiscordJS, { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})


client.on('ready', () => {
    console.log('The Bot is Ready')  
})  
client.on('messageCreate', (message) => {
    
    //store all words in regex
    const regx = /\bhello\b|\bHello\b|\bhi\b|\bHi\b|\bhey\b|\bHey\b/g;
    const pingRegex = /\bping\b/g;
    const badWords = /\bfuck\b|\bFuck\b|\bpiss off\b|\bbitch\b|\bass\b/g;
    //hello reply 
    if (message.content.match(regx) ){   
          //checks if the meses sent isint PingPong 
         if (message.author == client.user){
             //checks and sends back message to terminal
            return console.log(message.content.match(regx));
         }   
        
        message.reply({content: 'Hello'})
           
    }

    //Ping Pong 
    if (message.content.match(pingRegex)){    
        if (message.author == client.user){
            return console.log(message.content.match(pingRegex));
        }
        message.reply({content: 'pong'})
    }

    if (message.content.match(badWords)){    
        if (message.author == client.user){
            return console.log(message.content.match(badWords));
        }

        message.reply({content: 'no no no no naughty words, Here is a dictionary to find a better word to express how you feel https://www.dictionary.com'})
    }
})

client.login(process.env.TOKEN)