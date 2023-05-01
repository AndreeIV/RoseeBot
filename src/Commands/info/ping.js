
module.exports = {
    DESCRIPTION: 'Sirve para ver el ping del bot',
    // PERMISSIONS: ['Administrator', 'KickMembers', 'BanMembers'],
    ALIASES: ['pong'],
    OWNER: true,

    async execute(client, message, args, prefix) {
        return message.reply(`\`${client.ws.ping}ms\``);
    }
}