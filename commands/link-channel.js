const fs = require('fs');
const { MessageEmbed } = require("discord.js")

exports.run = (client, interaction) => {
    if (!interaction.member.permissions.has("MANAGE_CHANNELS")) {
        const permissionMissing = new MessageEmbed()
            .setColor("RED")
            .setTitle("Erreur")
            .setDescription("Vous n'avez pas la permission d'exécuter cette commande.")
            .setFooter({ text: `Bot développé par LProgead#3667` })

        return interaction.reply({
            embeds: [permissionMissing],
            ephemeral: true
        });
    }

    const data = JSON.parse(fs.readFileSync('data.json'));

    data.channels[interaction.guild.id] = interaction.channel.id;

    fs.writeFileSync("data.json", JSON.stringify(data));

    const success = new MessageEmbed()
        .setColor("WHITE")
        .setTitle("Salon défini avec succès")
        .setFooter({ text: `Bot développé par LProgead#3667` })

    interaction.reply({
        embeds: [success],
        ephemeral: true
    });
}