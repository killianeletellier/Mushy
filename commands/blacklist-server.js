const fs = require('fs');
const { MessageEmbed } = require("discord.js")

exports.run = (client, interaction) => {
    const data = JSON.parse(fs.readFileSync('data.json'));

    if (!data.botOwners.includes(interaction.user.id)) {
        const permissionMissing = new MessageEmbed()
            .setColor("RED")
            .setTitle("Erreur")
            .setDescription("Vous n'avez pas la permission d'exécuter cette commande.")
            .setFooter({ text: `Bot développé par LProgead#3667` })

        return interaction.reply({
            embeds: [permissionMissing]
        });
    }

    const serverID = interaction.options.get('server').value;

    const whitelistedGuilds = data.whitelistedGuilds;

    const newTable = whitelistedGuilds.filter(guild => guild != serverID);

    data.whitelistedGuilds = newTable;

    fs.writeFileSync("data.json", JSON.stringify(data));

    const success = new MessageEmbed()
        .setColor("WHITE")
        .setTitle("Serveur blacklisté avec succès")
        .setFooter({ text: `Bot développé par LProgead#3667` })

    interaction.reply({
        embeds: [success]
    });
}