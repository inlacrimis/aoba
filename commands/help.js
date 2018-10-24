const Discord = require("discord.js");
const embed = require('discord-embed-maker');

exports.run = (bot, message, args) => {
  var helpem = new Discord.RichEmbed()
	.setAuthor("Help command list:")
    .setColor(0x00FF00)
    .addField("=>avatar", "Shows avatar of a specific person.")
    .addField("=>coinflip", "Coinflips, heads & tails, who wins?")
	.addField("=>clear", "Clear the chat a little bit, there are limits 1-100 messages at once",)
	.addField("=>say", "Make me say anything you want <3")
	.addField("=>vote", "Voting command, basically voting.")
	.addField("=>user", "Check any user's information.")
	.addField("=>bio", "Check my biography ^-^")
	.addField("=>invite", "Get my invite link + link to support server.")
	.addField("=>kick", "Kick any member you want using this.")
	.addField("=>love", "The love meter, show a person how much you love them.")
	.addField("=>neko", "Random nekos, SFW + NSFW depends on the channel.")
	.addField("=>baka", "Tell a person how much baka they are.")
	.addField("=>smug", "Smug, just smug.")
	.addField("=>hugs", "Hugging, hug someone you love *for example me*")
	.addField("=>ban", "Ban whoever you want >:D")
	
	message.channel.send(helpem);

};

exports.help = {
    name: 'help',
    usage: "help",
    description: "help command"
};
