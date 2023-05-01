module.exports = {
    aliases: ['sff', 'mezclar'],

    execute: async ( client, message ) => {

        // !Obtenemos los datos de la cola
        const queue = client.distube.getQueue(message);

        if ( !queue ) return message.reply(`${client.emotes.error} || ¡No hay nada en la cola ahora mismo!`);

        // !Usamos la función "shuffle()" para mezclar las canciones, siempre y cuando haya cola.
        queue.shuffle();
        message.reply(`Las anciones fueron mezcladas`)

    } 
}