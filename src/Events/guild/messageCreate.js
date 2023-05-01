module.exports  = async (client, message) => {

    console.log(message.author.username)
    if (!message.guild || !message.channel || message.author.bot) return
    if (!message.content.startsWith(process.env.PREFIX)) return

    const ARGS = message.content.slice(process.env.PREFIX.length).trim().split(/ +/g);

    const CMD = ARGS?.shift()?.toLowerCase();

    // !Agrega aliases al comando
    const COMANDO = client.commands.get(CMD) || client.commands.find(c =>c.ALIASES && c.ALIASES.includes(CMD));

    if (COMANDO) {
        if (COMANDO.OWNER) {
            const DUEÑOS = process.env.OWNER_ID.split(' ');
    

            
            if (!DUEÑOS.includes(message.author.id)) return message.reply({
                content: `❌ **Solo los dueños de este bot pueden ejecutar este comando!**\nDueños del bot: ${DUEÑOS.map(DUEÑO => `<@${DUEÑO}>`).join(', ')}`
            })
        }

        if (COMANDO.BOT_PERMISSIONS) {

            if (!message.guild.members.me.permissions.has(COMANDO.BOT_PERMISSIONS)) return message.reply({
                content: `❌ **Nesecito los siguientes permisos para ejecutar este comando!**\n${COMANDO.BOT_PERMISSIONS.map(PERMISO => `\`${PERMISO}\``).join(', ')}`
            })
        }

        if (COMANDO.PERMISSIONS) {

            if (!message.member.permissions.has(COMANDO.BOT_PERMISSIONS)) return message.reply({
                content: `❌ **Nesecitas los siguientes permisos para ejecutar este comando!**\n${COMANDO.BOT_PERMISSIONS.map(PERMISO => `\`${PERMISO}\``).join(', ')}`
            })
        }

        try {
            COMANDO.execute(client, message, ARGS, process.env.PREFIX)
        } catch (error) {
            message.reply({
                content: `**Ha ocurrido un error al ejecutar el comando!**\n*Mira la consola para más detalle*`
            })
            console.log(error)
            return
        }
    }
}