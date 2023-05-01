module.exports = {
    aliases: ['q', 'cola'],
    execute: async (client, message, args, prefix) => {

        const queue =  client.distube.getQueue(message);
        if (!queue) return message.reply("No hay cola, asi que no puede ser mostrada");

        const q = queue.songs
        .map((song, i) => `${i === 0 ? 'Playing:' : `${i}.`} ${song.name} - \`${song.formattedDuration}\``)
        .join('\n')
      message.channel.send(` | **Server Queue**\n${q}`)


    }
}