const { Discord, MessageEmbed } = require("discord.js");
const market = require("../schemas/market");
const coin = require("../schemas/coin");


module.exports = {
    conf: {
      aliases: ["cash", "dolar","para"],
      name: "cash",
      help: "cash"
    },
    run: async (client, message, args,embed) => {
      const coinData = await coin.findOne({ guildID: message.guild.id, userID: message.author.id });
      message.channel.send(`💰 | ${message.author.tag}, Toplam Dolarınız : \`${coinData ? coinData.coin : 0}\` `)
}}