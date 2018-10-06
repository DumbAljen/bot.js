const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    if(message.member.hasPermission("MANAGE_NICKNAMES") == true) {
        if(message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES") == true) {
            message.reply("rozpoczęto resetowanie!");
            message.guild.members.forEach(mem => {
            mem.setNickname("");
            });
            message.react("✅");
        } else {
            message.channel.send("Bot nie ma uprawnień do zarządzania pseudonimami");
            message.react("❌");
        }
    } else {
        message.reply("Brak uprawnień!");
        message.react("❌");
    }
}

module.exports.help = {
    name:"resetall",
    name2:"resetall",
    desc:"Resetuje wszystkim pseudonimy",
    perms:"Zarządzanie pseudonimami"
}