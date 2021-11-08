import { Intents, Massage } from "discord.js";
import Discordjs from "discord,js";

import dotenv from "dotenv";

dotenv.config();

const client = new Discordjs.Client({
    intents:[
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILDS_MESSAGES
    ]
});

client.on('ready', () => {
    console.log(`${client.user.tag} でログインしています。`)
  })

client.on("messageCreate", async msg => {
    if(msg.content === "!hey"){
        msg.reply("hey!");
    }
})

client.login(process.env.TOKEN);