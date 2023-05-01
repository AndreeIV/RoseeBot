module.exports = {
    ALIASES: ['disconnect', 'salir', 'lv'],

    execute: async (client, message) => {
        client.distube.voices.leave(message)

    }
}