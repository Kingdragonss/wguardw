const Discord = require("discord.js");


exports.run = async (client, message, args) => {

  
const istatistikler = new Discord.MessageEmbed()
  .addField(`
<a:hydragoldstar:791092863806996520> »  Pingim` ,`${client.ws.ping}ms`,true)
  .addField(`
<a:hydragoldstar:791092863806996520> » Yapımcım` ,`<@789115192838586399>`,true)
  .addField(`
<a:hydragoldstar:791092863806996520> » Node.js`, `${process.version}`, true)
 .addField(`
<a:hydragoldstar:791092863806996520> » Kanal Sayısı`, `${client.channels.cache.size  }`, true)
 .addField(`
<a:hydragoldstar:791092863806996520> » Kullanıcı Sayısı`, `${client.users.cache.size}`, true)
 .addField(`
<a:hydragoldstar:791092863806996520> » Sunucu Sayısı`, `${client.guilds.cache.size}`, true)
 .addField(`SERVER`, `HYDRA`, true)
  message.channel.send(istatistikler)
  
  
}
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['istatistik'],
  permLevel: 0
};

exports.help = {
  name: 'i',
  description: 'Otorol sistemini ayarlamaya yarar.',
  usage: '-otorol-ayarla @rol #kanal'
}; 