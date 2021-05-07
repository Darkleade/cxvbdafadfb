const { Discord, MessageEmbed, Message } = require("discord.js");
const coin = require("../schemas/coin");
const market = require("../schemas/market");



module.exports = {
    conf: {
      aliases: ["al", "buy"],
      name: "al",
      help: "al"
    },
    run: async (client, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
    let embed = new MessageEmbed().setFooter("Developed By Aias.").setTimestamp().setColor("RANDOM")
    let coinData = await coin.findOne({ guildID: message.guild.id, userID: message.author.id });
    if(!args[0]) return message.channel.send(embed.setDescription(`**Ne almak istediğini belirt.** Nasıl alıncağını bilmiyorsan \`racoin market\`  `)).then(x => x.delete({timeout: 5000}))
    if (args[0] === "1") {
      if (!coinData || coinData && 5000 > coinData.coin) return message.channel.send(embed.setDescription(`Coinin yetersiz. Bunu alabilmek için \`${5000 - (coinData ? coinData.coin : 0)}\` coine ihtiyacın var!`)).then(x => x.delete({timeout: 50000}));
    message.channel.send(embed.setDescription(`Başarıyla spotify premium satın aldınız!`)).then(x => x.delete({timeout: 5000}))
    await coin.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $inc: { coin: -5000 } }, { upsert: true });
    await market.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $inc: { spotifypremium: 1 } }, { upsert: true });
    client.channels.cache.get(`827906854444335104`).send(`${message.author} üyesi \`Spotify Premium\` satın aldı`)
    }
    if (args[0] === "2") {
      if (!coinData || coinData && 6000 > coinData.coin) return message.channel.send(embed.setDescription(`Coinin yetersiz. Bunu alabilmek için \`${6000 - (coinData ? coinData.coin : 0)}\` coine ihtiyacın var!`)).then(x => x.delete({timeout: 5000}));
        message.channel.send(embed.setDescription(`Başarıyla 100K Owo Cash satın aldınız!`)).then(x => x.delete({timeout: 5000}))
        await coin.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $inc: { coin: -6000 } }, { upsert: true });
        await market.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $inc: { yuzowocash: 1 } }, { upsert: true });
   client.channels.cache.get(`827906854444335104`).send(`${message.author} üyesi \`Owo Cash\` satın aldı`)
        }
    if (args[0] === "3") {
      if (!coinData || coinData && 8000 > coinData.coin) return message.channel.send(embed.setDescription(`Coinin yetersiz. Bunu alabilmek için \`${8000 - (coinData ? coinData.coin : 0)}\` coine ihtiyacın var!`)).then(x => x.delete({timeout: 5000}));
        message.channel.send(embed.setDescription(`Başarıyla Aylık Youtube Premium satın aldınız!`)).then(x => x.delete({timeout: 5000}))
        await coin.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $inc: { coin: -8000 } }, { upsert: true });
        await market.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $inc: { aylikyoutube: 1 } }, { upsert: true });
   client.channels.cache.get(`827906854444335104`).send(`${message.author} üyesi \`Aylık Youtube Premium\` satın aldı`)
            }
            if (args[0] === "4") {
              if (!coinData || coinData && 20000 > coinData.coin) return message.channel.send(embed.setDescription(`Coinin yetersiz. Bunu alabilmek için \`${20000 - (coinData ? coinData.coin : 0)}\` coine ihtiyacın var!`)).then(x => x.delete({timeout: 5000}));
                message.channel.send(embed.setDescription(`Başarıyla Nitro Classic satın aldınız!`)).then(x => x.delete({timeout: 5000}))
                await coin.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $inc: { coin: -20000 } }, { upsert: true });
                await market.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $inc: { nitroclassic: 1 } }, { upsert: true });
           client.channels.cache.get(`827906854444335104`).send(`${message.author} üyesi \`Nitro Classic\` satın aldı`)
                    }
            if (args[0] === "5") {
              if (!coinData || coinData && 30000 > coinData.coin) return message.channel.send(embed.setDescription(`Coinin yetersiz. Bunu alabilmek için \`${30000 - (coinData ? coinData.coin : 0)}\` coine ihtiyacın var!`)).then(x => x.delete({timeout: 5000}));
                message.channel.send(embed.setDescription(`Başarıyla Valorant VP satın aldınız!`)).then(x => x.delete({timeout: 5000}))
                await coin.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $inc: { coin: -30000 } }, { upsert: true });
                await market.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $inc: { valorantvp: 1 } }, { upsert: true });
           client.channels.cache.get(`827906854444335104`).send(`${message.author} üyesi \`Valorant VP\` satın aldı`)
                    }
    
            if (args[0] === "6") {
              if (!coinData || coinData && 30000 > coinData.coin) return message.channel.send(embed.setDescription(`Coinin yetersiz. Bunu alabilmek için \`${30000 - (coinData ? coinData.coin : 0)}\` coine ihtiyacın var!`)).then(x => x.delete({timeout: 5000}));
                message.channel.send(embed.setDescription(`Başarıyla LOL RP satın aldınız!`)).then(x => x.delete({timeout: 5000}))
                await coin.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $inc: { coin: -30000 } }, { upsert: true });
                await market.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $inc: { lolrp: 1 } }, { upsert: true });
           client.channels.cache.get(`827906854444335104`).send(`${message.author} üyesi \`LOL RP\` satın aldı`)
                    }
                if (args[0] === "7") {
              if (!coinData || coinData && 40000 > coinData.coin) return message.channel.send(embed.setDescription(`Coinin yetersiz. Bunu alabilmek için \`${40000 - (coinData ? coinData.coin : 0)}\` coine ihtiyacın var!`)).then(x => x.delete({timeout: 5000}));
                message.channel.send(embed.setDescription(`Başarıyla Nitro Boostlu satın aldınız!`)).then(x => x.delete({timeout: 5000}))
                await coin.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $inc: { coin: -40000 } }, { upsert: true });
                await market.findOneAndUpdate({ guildID: message.guild.id, userID: message.author.id }, { $inc: { nitroboostlu: 1 } }, { upsert: true });
           client.channels.cache.get(`827906854444335104`).send(`${message.author} üyesi \`Boostlu Nitro\` satın aldı`)
                    }
    
      
      
      
}
  };
  