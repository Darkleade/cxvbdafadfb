const { Discord, MessageEmbed } = require("discord.js");
const market = require("../schemas/market");
const coin = require("../schemas/coin");


module.exports = {
    conf: {
      aliases: ["gönder", "give","ver"],
      name: "gönder",
      help: "gönder"
    },
    run: async (client, message, args,embed) => {
let coinData = await coin.findOne({ guildID: message.guild.id, userID: message.author.id });
const member = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
if (!member) return message.channel.send(embed.setDescription("Bir kullanıcı belirtmelisin!")).then(x=> x.delete({timeout: 5000}));
if (member.user.id === message.author.id) return message.channel.send(embed.setDescription("Kendine coin veremezsin!"));
const count = parseInt(args[1]);
if (!count) return message.channel.send(embed.setDescription("Coin vermek için bir sayı belirtmelisin!")).then(x=> x.delete({timeout: 5000}));
if (!count < 0) return message.channel.send(embed.setDescription("Verilecek sayı 0'dan küçük olamaz!")).then(x=> x.delete({timeout: 5000}));
if (!coinData || coinData && 1 > coinData) return message.channel.send(`Coinin 1 den küçük olamaz.`).then(x=> x.delete({timeout: 5000}));
if (!coinData || coinData && count > coinData.coin) return message.channel.send(embed.setDescription("Göndereceğin sayı kendi coininden yüksek olamaz!")).then(x=> x.delete({timeout: 5000}));
await coin.findOneAndUpdate({ guildID: message.guild.id, userID: member.user.id }, { $inc: { coin: count } }, { upsert: true });
await coin.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $inc: { coin: -count } }, { upsert: true });      
message.channel.send(`${member.toString()} kişisine başarıyla **${count}** coin gönderildi!`);     
      
      
      
}}