const { Discord, MessageEmbed } = require("discord.js");
const market = require("../schemas/market");
const coin = require("../schemas/coin");


module.exports = {
    conf: {
      aliases: ["top", "top"],
      name: "top",
      help: "top"
    },
    run: async (client, message, args) => {
      let embed = new MessageEmbed().setAuthor(message.member.displayName,message.author.avatarURL({dynamic:true})).setColor('BLACK').setFooter("Developed By Aias.")
    const coinData = await coin.find({ guildID: message.guild.id }).sort({ coin: -1 });

     let coinSum = 0;
 const coinUsers = coinData.splice(0, 5).map((x, index) => {
      coinSum += x.coin;
      return `\`${index+1}.\` <@${x.userID}>: \`${Number(x.coin).toLocaleString()} coin\``
    }).join(`\n`);
   message.channel.send(embed.setDescription(` **${message.guild} Sunucusunun Coin Bilgileri:** \`(Toplam ${coinSum})\`\n
${coinUsers.length > 0 ? coinUsers : "Veri Bulunmuyor."}`))   
}}