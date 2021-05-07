const { Client, Collection } = require("discord.js");
const client = (global.client = new Client({ fetchAllMembers: true }));
const settings = require("./src/configs/settings.json");
client.commands = new Collection();
client.aliases = new Collection();
client.cooldown = new Map();
require("./src/handlers/commandHandler");
require("./src/handlers/eventHandler");
require("./src/handlers/mongoHandler");

client
  .login(settings.token)
  .then(() => console.log("[BOT] Bot connected!"))
  .catch(() => console.log("[BOT] Bot can't connected!"));
  


  client.on("ready", async () => { 
    let botVoiceChannel = client.channels.cache.get(settings.botSes); 
    if (botVoiceChannel) 
    botVoiceChannel.join().catch(err => console.error("Bot ses kanalına bağlanamadı!"));
    });  
    client.on("ready", async () => {
    client.user.setPresence({ activity: { name: settings.botDurum}, status: "online" });
    })