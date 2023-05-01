
module.exports = {
    ALIASES: ['reproducir', 'p', 'ms'],
    DESCRIPTION: 'Sirve para reprodcucir música',

    execute: async (client, message, args, prefix) => {


        // !Comprobaciones previas
        const voiceChannel = message.member.voice.channel;
        const songs = args.join(" ");


        if(!args.length) return message.reply(`${client.emotes.error} **Tienes que especificar el nombre de una canción**`)
        if (!voiceChannel) return message.channel.send(`${client.emotes.error} **Debes estar en un canal de voz**`);

        message.reply(`🔎**Buscando \`${songs}...\` **`)

        // if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send("Debes estar en el mismo canal de voz que yo");
    
            
            
        await client.distube.play(message.member.voice.channel, songs, {
            message,
            textChannel: message.channel,
            member: message.member

        }).catch(err => {
            console.log(err)
            message.reply('¡Hubo un error al intentar reproducir la canción!');
        })
    }
}