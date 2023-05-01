require('dotenv').config();
require('colors');

const Bot = require('./src/Structures/Client.js') 


new Bot();






























// const { Client, Events, GatewayIntentBits, ChatInputCommandInteraction, Message, Collection, ReactionManager, ReactionCollector, ReactionEmoji, Partials, ActivityType, PresenceUpdateStatus, EmbedBuilder } = require('discord.js'); //Definimos discord
// require('./src/Commands/createEmbeds.js');
// require('./handlers/distube.js');


// const client = new Client({
//   intents: [
//     GatewayIntentBits.Guilds,
//     GatewayIntentBits.MessageContent,
//     GatewayIntentBits.GuildMessages,
//     GatewayIntentBits.GuildMembers,
//     GatewayIntentBits.GuildVoiceStates
//   ],
//   partials: [
//     Partials.User,
//     Partials.Channel,
//     Partials.GuildMember,
//     Partials.Message,
//     Partials.Reaction
//   ],
//   allowedMentions: {
//     parse: ["roles","everyone", "users"],
//     repliedUser: false
//   },
//   presence:{
//     status: PresenceUpdateStatus.Online,
//     activities: [
//       {
//         name: process.env.STATUS,
//         type: ActivityType[process.env.STATUS_TYPE],
//       }
//     ]
//   }

// });


// let prefix = process.env.PREFIX


// client.on('ready', () => {
//   client.user.setPresence({
//     activities: {
//       name: 'pollo',
//       type: 'Playing'
//     },
//     status: 'online'
//   })

//   client.channels.cache.get('1039674766996553839').send(`${client.user.username} se ha conectado.`)
// })

// // client.on('channelCreate', () => {
// //   client.channels.cache.get('1039674766996553839').send('canal creado')
// // })
// client.on('messageCreate', (message) => {
//   if (!message.content.startsWith(prefix)) return; 
//   if (message.author.bot) return;


//   if(message.content.startsWith(prefix + 'ping')) {
//     message.channel.send(`${client.ws.ping}ms`);
//   }

//   if(message.content.startsWith(prefix + 'info')) {

//     console.log(client.emojis.cache.at(0))
//   }



//   // console.log(message)

// })


// client.login(process.env.DISCORD_TOKEN).then( () => {
//   console.log(`${client.user.username} se ha conectado`)
// })

