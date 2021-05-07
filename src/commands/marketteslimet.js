const { Discord, MessageEmbed, Message } = require("discord.js");
const coin = require("../schemas/coin");
const market = require("../schemas/market");



module.exports = {
    conf: {
      aliases: ["teslim", "teslimet", "verildi"],
      name: "teslimet",
      help: "teslimet"
    },
    run: async (client, message, args) => {
    let embed = new MessageEmbed().setFooter("Developed By Aias.").setTimestamp().setColor("RANDOM")
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    if(!args[0]) return message.channel.send(embed.setDescription(`**Ne teslim etmek istediğini belirt.**\n\n.teslimet vip\n.teslimet araba\n.teslimet taç`)).then(x => x.delete({timeout: 5000}))
    if (args[0] === "1") {
    message.channel.send(embed.setDescription(`Başarıyla spotifypremium öğesini teslim ettiniz!`)).then(x => x.delete({timeout: 5000}))
    await market.findOneAndUpdate({ guildID: message.guild.id, userID: member.user.id }, { $inc: { spotifypremium: -1 } }, { upsert: true });
    }
    if (args[0] === "2") {
        message.channel.send(embed.setDescription(`Başarıyla 100K Owo Cash öğesini teslim ettiniz!`)).then(x => x.delete({timeout: 5000}))
        await market.findOneAndUpdate({ guildID: message.guild.id, userID: member.user.id }, { $inc: { yuzowocash: -1 } }, { upsert: true });
        }
    if (args[0] === "3") {
        message.channel.send(embed.setDescription(`Başarıyla aylık youtube premium öğesini teslim ettiniz!`)).then(x => x.delete({timeout: 5000}))
        await market.findOneAndUpdate({ guildID: message.guild.id, userID: member.user.id }, { $inc: { aylikyoutube: -1 } }, { upsert: true });
    }
    if (args[0] === "4") {
      message.channel.send(embed.setDescription(`Başarıyla classic nitro teslim ettiniz!`)).then(x => x.delete({timeout: 5000}))
      await market.findOneAndUpdate({ guildID: message.guild.id, userID: member.user.id }, { $inc: { nitroclassic: -1 } }, { upsert: true });
  }
    if (args[0] === "5") {
      message.channel.send(embed.setDescription(`Başarıyla valorant vp teslim ettiniz!`)).then(x => x.delete({timeout: 5000}))
      await market.findOneAndUpdate({ guildID: message.guild.id, userID: member.user.id }, { $inc: { valorantrp: -1 } }, { upsert: true });
  }
    if (args[0] === "6") {
      message.channel.send(embed.setDescription(`Başarıyla lol rp teslim ettiniz!`)).then(x => x.delete({timeout: 5000}))
      await market.findOneAndUpdate({ guildID: message.guild.id, userID: member.user.id }, { $inc: { lolrp: -1 } }, { upsert: true });
  }
    if (args[0] === "7") {
      message.channel.send(embed.setDescription(`Başarıyla Boostlu nitro teslim ettiniz!`)).then(x => x.delete({timeout: 5000}))
      await market.findOneAndUpdate({ guildID: message.guild.id, userID: member.user.id }, { $inc: { nitroboostlu: -1 } }, { upsert: true });
  }    
    
    
    }
  };
  