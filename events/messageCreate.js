const { MessageEmbed } = require('discord.js');
const fs = require('fs');

module.exports = (client, message) => {
    if (message.author.bot) return;

    const data = JSON.parse(fs.readFileSync('data.json'));

    if (!data.channels[message.guild.id] || data.channels[message.guild.id] != message.channel.id) return;

    message.delete();

    const messageEmbed = new MessageEmbed()
        .setAuthor({ name: message.author.tag })
        .setThumbnail(message.author.displayAvatarURL())
        .setDescription(message.content)
        .setFooter({ text: `Message envoyé depuis : ${message.guild.name} | Bot développé par LProgead#3667`, iconURL: message.guild.iconURL() })
        .setColor(Math.floor(Math.random()*16777215).toString(16))

    for (server in data.channels) {
        client.channels.fetch(data.channels[server])
            .then(channel => {
                channel.send({
                    embeds: [ messageEmbed ]
                });
            });
    }
}