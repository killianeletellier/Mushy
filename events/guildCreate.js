const fs = require('fs');

module.exports = (client, guild) => {
    const data = JSON.parse(fs.readFileSync('data.json'));

    if (!data.whitelistedGuilds.includes(guild.id)) guild.leave();
}