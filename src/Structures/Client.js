const { Client, GatewayIntentBits, Partials, ActivityType, PresenceUpdateStatus, Collection } = require('discord.js');
const BotUtils = require('./Utils');
const config = require('./../../config.json')


module.exports = class extends Client {
    constructor(options = {
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
            GatewayIntentBits.GuildMembers,
            GatewayIntentBits.MessageContent,
            GatewayIntentBits.GuildVoiceStates
        ],
        partials: [
            Partials.User,
            Partials.Channel,
            Partials.GuildMember,
            Partials.Message,
            Partials.Reaction
        ],
        allowedMentions: {
        parse: ["roles","everyone", "users"],
        repliedUser: false
        },
        presence:{
            activities: [
                {
                    name: process.env.STATUS,
                    type: ActivityType[process.env.STATUS_TYPE],
                }
            ],
            status: PresenceUpdateStatus.Online
        },

    }) {
        super({
            ...options
        })

        this.commands = new Collection();
        this.slashCommands = new Collection();
        this.emotes = config.emojis
        this.slashArray = []

        this.utils = new BotUtils(this)

        this.start();
    }

    async start() {
        await this.loadSlashCommands()
        await this.loadCommands()
        await this.loadEvents()
        await this.loadHandlers()
        
        this.login(process.env.DISCORD_TOKEN)
    }

    async loadSlashCommands() {
        console.log((`(/) Cargando SlashComandos`).yellow);
        await this.slashCommands.clear();
        this.slashArray = []

        const RUTA_ARCHIVOS = await this.utils.loadFiles('/src/SlashCommands');

        if(RUTA_ARCHIVOS.length) {
            RUTA_ARCHIVOS.forEach(RA => {
                try {
                    const COMANDO = require(RA);
                    const NOMBRE_COMANDO = RA.split('\\').pop().split('/').pop().split('.')[0]
                    COMANDO.CMD.name = NOMBRE_COMANDO;

                    if(NOMBRE_COMANDO) this.slashCommands.set(NOMBRE_COMANDO, COMANDO)

                    this.slashArray.push(COMANDO.CMD.toJSON());
                } catch (error) {
                    console.log(`ERROR AL CARGAR EL ARCHIVO ${RA}`.bgRed)
                    console.log(error)
                }
            });
        }

        console.log(`(/) ${this.slashCommands.size} SlashComandos cargados`.green)

        
        if(this?.application?.commands) {
            this.application.commands.set(this.slashArray);

            console.log(`(/) ${this.slashCommands.size} Comandos Publicados`.green)
        }
        
    }
    
    async loadCommands() {
        console.log((`(${process.env.PREFIX}) Cargando Comandos`).yellow);
        await this.commands.clear();
        
        const RUTA_ARCHIVOS = await this.utils.loadFiles('/src/Commands');

        if(RUTA_ARCHIVOS.length) {
            RUTA_ARCHIVOS.forEach(RA => {
                try {
                    const COMANDO = require(RA);
                    const NOMBRE_COMANDO = RA.split('\\').pop().split('/').pop().split('.')[0]
                    COMANDO.NAME = NOMBRE_COMANDO;
                    console.log(COMANDO.NAME)

                    if(NOMBRE_COMANDO) this.commands.set(NOMBRE_COMANDO, COMANDO)
                } catch (error) {
                    console.log(`ERROR AL CARGAR EL ARCHIVO ${RA}`.bgRed.blue)
                    console.log(error)
                }
            });
        }

        console.log(`(r) ${RUTA_ARCHIVOS.length} Comandos cargados`.green)
    }

    async loadHandlers() {
        console.log((`(-) Cargando Handlers`).yellow);

        const RUTA_ARCHIVOS = await this.utils.loadFiles('/src/Handlers');

        if(RUTA_ARCHIVOS.length) {
            RUTA_ARCHIVOS.forEach(RA => {
                try {
                    require(RA)(this);

                } catch (error) {
                    console.log(`ERROR AL CARGAR EL ARCHIVO ${RA}`.bgRed)
                    console.log(error)
                }
            });
        }

        console.log(`(-) ${RUTA_ARCHIVOS.length} Handlers cargados`.green)

        
    }

    async loadEvents() {
        console.log((`(+) Cargando Eventos`).yellow);
        
        const RUTA_ARCHIVOS = await this.utils.loadFiles('/src/Events');
        this.removeAllListeners()

        if(RUTA_ARCHIVOS.length) {
            RUTA_ARCHIVOS.forEach(RA => {
                try {
                    const EVENTO = require(RA);
                    const NOMBRE_EVENTO = RA.split('\\').pop().split('/').pop().split('.')[0]
                    
                    this.on(NOMBRE_EVENTO, EVENTO.bind(null, this))

                } catch (error) {
                    console.log(`ERROR AL CARGAR EL ARCHIVO ${RA}`.bgRed)
                    console.log(error)
                }
            });
        }

        console.log(`(+) ${RUTA_ARCHIVOS.length} Eventos cargados`.green)

        
    }
}
