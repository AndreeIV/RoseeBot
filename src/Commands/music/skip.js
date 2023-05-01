module.exports = {
    ALIASES: ['sk', 'next'],
    inVoiceChannel: true,


    execute: async (client, message, args, prefix) => {

        // !Obtengo datos de la cola
        const queue = client.distube.getQueue(message);

        if (!queue) return message.reply("Upss, la música no esta activa")

        try {
            const song = await queue.skip(message);
            message.reply(`✅ | Skipped! Now playing:\n${song.name}`);
        } catch (err) {
            message.reply(`${client.emotes.error} || No hay una próxima canción`);
        
        }
    }
}