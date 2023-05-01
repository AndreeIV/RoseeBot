const { Constants } = require("discord.js");

module.exports = {
    aliases: ['unir', 'jn' ],

    execute: async (client, message, args) => {
        

        let voiceChannel = message.member.voice.channel;
        
        if ( args[0] ) {
            voiceChannel = await client.channels.fetch( args[0] )
            .catch( err => {
                return 
            });
            
            if (!Constants.VoiceBasedChannelTypes.includes(voiceChannel?.type)) {
                return message.reply(`${client.emotes.error} | \`\`¡No es un identificador de canal de voz válido!\`\``)
            }
        }

        if (!voiceChannel) {
            return message.channel.send(
                `${client.emotes.error} | ¡Debe estar en un canal de voz o ingresar una identificación de canal de voz!`
            )
        }

        client.distube.voices.join(voiceChannel).then( data => {

            
            return message.reply(`¡Genial, los estoy esperando en: ${voiceChannel}`)
        }).catch( err => {
            
            return
        })
    }
}