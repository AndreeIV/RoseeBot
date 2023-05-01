module.exports  = async (client, interaction) => {
    console.log('Módulo interaction listo')
    if (interaction.guild || !interaction.channel) return;

    const COMANDO = client.slashCommands.get(interaction?.commandName);

    if (COMANDO) {
        if (COMANDO.OWNER) {
            const DUEÑOS = process.env.OWNER_ID.split(' ');

            if (!DUEÑOS.includes(interaction.user.id)) return interaction.reply({
                content: `❌ **Solo los dueños de este bot pueden ejecutar este comando!**\nDueños del bot: ${DUEÑOS.map(DUEÑO => `<@${DUEÑO}>`).join(', ')}`
            })
        }

        if (COMANDO.BOT_PERMISSIONS) {

            if (!interaction.guild.members.me.permissions.has(COMANDO.BOT_PERMISSIONS)) return interaction.reply({
                content: `❌ **Nesecito los siguientes permisos para ejecutar este comando!**\n${COMANDO.BOT_PERMISSIONS.map(PERMISO => `\`${PERMISO}\``).join(', ')}`
            })
        }

        if (COMANDO.PERMISSIONS) {

            if (!interaction.member.permissions.has(COMANDO.BOT_PERMISSIONS)) return interaction.reply({
                content: `❌ **Nesecitas los siguientes permisos para ejecutar este comando!**\n${COMANDO.BOT_PERMISSIONS.map(PERMISO => `\`${PERMISO}\``).join(', ')}`
            })
        }

        try {
            await COMANDO.execute(client, interaction, "/")
        } catch (error) {
            interaction.reply({
                content: `**Ha ocurrido un erroe al ejecutar el comando!**\n*Mira la consola para más detalle*`
            })
            console.log(error)
            return;
        }
    }
}