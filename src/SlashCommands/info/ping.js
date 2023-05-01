const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    CMD: new SlashCommandBuilder()
        .setDescription('Sirve para ver el ping del bot'),
    // DESCRIPTION: 'Sirve para ver el ping del bot',
    // PERMISSIONS: ['Administrator', 'KickMembers', 'BanMembers'],
    // OWNER: true,

    async execute(client, message, args, prefix) {
        return message.reply(`\`${client.ws.ping}ms\``);
    }
}