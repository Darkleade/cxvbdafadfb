const { Discord, MessageEmbed } = require("discord.js");
const market = require("../schemas/market");
const coin = require("../schemas/coin");


module.exports = {
    conf: {
      aliases: ["sil", "delete"],
      name: "sil",
      help: "sil"
    },
    run: async (client, message, args,embed) => {
const member = message.mentions.members.first() || message.guild.members.cache.get(args[1]);

const coinData = await coin.findOne({ guildID: message.guild.id, userID: member.user.id });
if(message.author.id !== "kendididn") return;
const count = parseInt(args[1]);
if (!count) return message.channel.send(embed.setDescription("Silmek için bir sayı belirtmelisin!")).then(x=> x.delete({timeout: 5000}));
if (!count < 0) return message.channel.send(embed.setDescription("Silmek sayı 0'dan küçük olamaz!")).then(x=> x.delete({timeout: 5000}));
if (!coinData || coinData && count > coinData.coin) return message.channel.send(embed.setDescription("Çıkarmak istediğiniz sayı, kişinin mevcut coininden büyük olamaz!"));

await coin.findOneAndUpdate({ guildID: message.guild.id, userID: member.user.id }, { $inc: { coin: -count } }, { upsert: true });
message.channel.send(`Başarıyla ${member.toString()} kullanıcısına **${count}** adet coin silindi!`);
      
      
      
      
      
      
}}