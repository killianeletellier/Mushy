const fs = require('fs');

module.exports = (client, guild) => {
    const data = JSON.parse(fs.readFileSync('data.json'));
    
    const whitelistedGuilds = data.whitelistedGuilds;

    const newTable = whitelistedGuilds.filter(whitelistedGuild => whitelistedGuilds != guild.id);

    data.whitelistedGuilds = newTable;

    fs.writeFileSync("data.json", JSON.stringify(data));
}