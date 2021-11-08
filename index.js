import {Intents, Message} from "discord.js";
import Discordjs from "discord.js"
import dotenv from "dotenv"
//envを読み込むための準備
dotenv.config()


const client =  new Discordjs.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})



client.on("message", (msg) => {
    if (msg.content === "hello"){
        msg.reply("hello!")
    }
})

client.login(process.env.TOKEN)