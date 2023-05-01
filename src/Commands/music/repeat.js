module.exports = {
    ALIASES: ['loop', 'rp'],
    // inVoiceChannel: true,

    execute: async (client, message, args, prefix) => {
        
        // !Obtiene datos del message
        const queue = client.distube.getQueue(message)

        // !Definimos el modo de repeticion en null
        let mode = null;
        let textMode = '';

        switch (args[0]) {
            case 'off':
                modo = 0;
                textMode = 'off';
                break;
        
            case 'song':
                modo = 1;
                textMode = 'song'
                break;

            case 'queue':
                modo = 2;
                textMode = 'queue';
                break

            default:
                modo = 2;
                textMode = 'queue';
                break;
        }
        
        // !Se para 'modo' a la funcion 'setRepearMode()' para establecer el modo
        queue.setRepeatMode(modo)

        // mode = mode ? (mode === 2 ? 'Repeat queue' : 'Repeat song') : 'Off'
        // message.reply(`${client.emotes.repeat} | Set repeat mode to \`${mode}\``)
        message.reply(`🔁 | Set repeat mode to \`${textMode}\``)
    }
}