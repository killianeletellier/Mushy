module.exports = (client, interaction) => {
    if (interaction.isCommand()) {
        const commandName = interaction.commandName;

        const command = client.commands.get(commandName);

        if (!command) return;

        command.run(client, interaction);
    }
}