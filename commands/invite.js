const embed = require('discord-embed-maker');

exports.run = (bot, message, args) => {
  message.channel.send("",
	  embed.setTitle("Invite link:"),
	  embed.setDescription("https://discordapp.com/oauth2/authorize?client_id=454002841229590561&permissions=10246&scope=bot")

)};

exports.help = {
    name: 'invite',
    usage: "invite",
    description: "invite link for bot"
};
