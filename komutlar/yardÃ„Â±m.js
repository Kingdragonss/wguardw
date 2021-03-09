const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('RANDOM')
.setAuthor(`HYDRA`)
.setDescription(`


<a:hydracrown3:816355855179841557>  **=**  \`g!kanal-koruma\` : **Kanal Koruma Aç/Kapat**
<a:hydratac:789369824249643009> **=**  \`g!küfür-engel\`:  **Küfür Engel Aç/Kapat**
<a:hydracrown3:816355855179841557> **=**  \`g!reklam-engel\` :  **Reklam Engel Aç/Kapat**
<a:hydratac:789369824249643009> **=**  \`g!sohbet aç-kapat\` :  **Sohbeti Açıp Kapatırsınız**
<a:hydracrown3:816355855179841557> **=**  \`g!ban\`: **Belirttiğiniz Kişiyi Sunucudan Banlarsınız**
<a:hydratac:789369824249643009> **=**  \`g!unban\`:  **Belirttiğiniz Kişinin Banını Kaldırırsınız**
<a:hydracrown3:816355855179841557> **=**  \`g!istatistik\`:  **Botun İstatistiklerini Atar**
<a:hydratac:789369824249643009> **=**  \`g!temizle\`:  **Belirttiğiniz Sayıda Mesajı Siler**
<a:hydracrown3:816355855179841557> **=**  \`g!ping\`:  **Pinginizi Ölçüp Atar**
<a:hydratac:789369824249643009> **=**  \`g!avatar\`:  **Avatarınızı Atar**

`)
.setImage("https://media.discordapp.net/attachments/789169435659075656/812922844982935552/image0.gif")
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Bizim yaptığımız bir yardım kodu.',
  usage: 'yardım'
};