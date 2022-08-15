const { MessageEmbed } = require("discord.js")

exports.run = (client, interaction) => {
    const list = new MessageEmbed()
        .setColor("WHITE")
        .setTitle("Liste des serveurs où le bot est présent")
        .setFooter({ text: `Bot développé par LProgead#3667` })

    client.guilds.fetch()
        .then(guilds => {
            guilds.forEach(guild => {
                list.addField(guild.name, guild.id)
            });

            interaction.reply({
                embeds: [list]
            });
        });
}