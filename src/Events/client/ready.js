module.exports = client => {
    console.log(`Sesión iniciada como ${client.user.tag}`)


    if(client?.application?.commands) {
        client.application.commands.set(client.slashArray);

        console.log(`(/) ${client.slashCommands.size} Comandos Publicados`.green)
    }
    
    client.distube.on('error', (channel, error) => {
        console.error(error);
        channel.send(`An error encoutered: ${error.slice(0, 1979)}`); // Discord limits 2000 characters in a message
    });
}