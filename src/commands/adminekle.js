const { Discord, MessageEmbed } = require("discord.js");
const market = require("../schemas/market");
const coin = require("../schemas/coin");


module.exports = {
    conf: {
      aliases: ["ekle", "add"],
      name: "ekle",
      help: "ekle"
    },
    run: async (client, message, args,embed) => {
const member = message.mentions.members.first() || message.guild.members.cache.get(args[1]);

const coinData = await coin.findOne({ guildID: message.guild.id, userID: member.user.id });
if(message.author.id !== "kendidin") return;
const count = parseInt(args[1]);
if (!count) return message.channel.send(embed.setDescription("Eklemek için bir sayı belirtmelisin!")).then(x=> x.delete({timeout: 5000}));
if (!count < 0) return message.channel.send(embed.setDescription("Eklenecek sayı 0'dan küçük olamaz!")).then(x=> x.delete({timeout: 5000}));
await coin.findOneAndUpdate({ guildID: message.guild.id, userID: member.user.id }, { $inc: { coin: count } }, { upsert: true });
message.channel.send(`Başarıyla ${member.toString()} kullanıcısına **${count}** adet coin eklendi!`);
      
      
      
      
      
      
}}