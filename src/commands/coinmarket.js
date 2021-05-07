const { Discord, MessageEmbed } = require("discord.js");
const market = require("../schemas/market");
const coin = require("../schemas/coin");


module.exports = {
    conf: {
      aliases: ["coinmarket", "market"],
      name: "coinmarket",
      help: "market"
    },
    run: async (client, message, args,embed) => {
      const marketData = await market.findOne({ guildID: message.guild.id, userID: message.author.id });
      const coinData = await coin.findOne({ guildID: message.guild.id, userID: message.author.id });
    message.channel.send(embed.setDescription(`
    Mağazamıza Hoşgeldiniz! Aşağıdan dolarınızın yettiği öğeyi satın alabilirsiniz!

    💰 Dolarınız : \`${coinData ? coinData.coin : 0}\`
    ---------------------------------------------------------
    Sahip Olduğunuz Eşyalar:${marketData ? `\nAldığı Spotify Premium Sayısı: \`${marketData.spotifypremium}\`` : ""}${marketData ? `\nAldığı Owo Cash Sayısı: \`${marketData.yuzowocash}\`` : ""}${marketData ? `\nAldığı Aylık Youtube Premium Sayısı: \`${marketData.aylikyoutube}\`` : ""}${marketData ? `\nAldığı Nitro Classic Sayısı: \`${marketData.nitroclassic}\`` : ""}${marketData ? `\nAldığı Valorant VP Sayısı: \`${marketData.valorantvp}\`` : ""}${marketData ? `\nAldığı LOL RP Sayısı: \`${marketData.lolrp}\`` : ""}${marketData ? `\nAldığı Nitro Boostlu Sayısı: \`${marketData.nitroboostlu}\`` : ""}
 
\`\`\`
ID    Ürün İsmi         Ürün Detayı   Fiyatı 
#1    Spotify Premium   1 Aylık       5000  💰
#2    Owo Cash          100K          6000  💰     
#3    Youtube Premium   1 Aylık       8000  💰
#4    Nitro Classic     1 Aylık       20000 💰
#5    Valorant VP       1250 VP       30000 💰
#6    LOL RP            1780 RP       30000 💰
#7    Nitro Boostlu     1 Aylık       40000 💰\`\`\` 
    \`PREFİX al <ID>\` yazarak satın alma yapabilirsiniz. 
    
    `)
    
    )  
  }
  };
  