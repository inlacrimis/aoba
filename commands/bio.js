const Discord = require("discord.js");
const embed = require('discord-embed-maker');

exports.run = (bot, message, args) => {
  var bioem = new Discord.RichEmbed()
    .setAuthor("My Biography:")
    .setThumbnail(bot.user.avatarURL)
    .setColor(0x00FF00)
    .addField("Full Username:", bot.user.displayName, true)
    .addField("Gender / Age:", "Female / 18", true)
    .addField("Created at:", "10/24/2018 6:29 PM GMT +0300")
	.addField("Created with:", "Discord.js", true)
	.addField("Zodiac:", "Libra", true)
	.addField("Nationality:", "Turkish :flag_tr:", true)
	.addField("Programs used:", "Atom Editor & Notepad++", true)
	
	message.channel.send(bioem);
};

exports.help = {
    name: 'bio',
    usage: "bio",
    description: "Bot's bio"
};
