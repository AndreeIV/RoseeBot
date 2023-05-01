// require('dotenv').config();

// const {Client, GatewayIntentBits, EmbedBuilder} = require('discord.js');
// const client = new Client({
//     intents: [
//         GatewayIntentBits.Guilds,
//         GatewayIntentBits.MessageContent,
//         GatewayIntentBits.GuildMessages,
//         GatewayIntentBits.GuildMembers
//     ]
// });



//     client.on('messageCreate', (message) => {
    
//         if(message.content.startsWith(process.env.PREFIX + 'createEmbed')) {
    

//             const filter = (m) => m.author.id === message.author.id;

//             const collector = message.channel.createMessageCollector(filter, { time: 10000 });

//             // collector.on('collect', (m) => {
//             //     console.log(`Collected ${m.content}`);
//             //     message.channel.send(`Entendido, ${m.content}`);
//             //     collector.stop();
//             // });
            
//             // collector.on('end', (collected, reason) => {
//             //     if (reason === 'time') {
//             //         message.channel.send('Lo siento, has tardado demasiado en responder. ¡Hablemos más tarde!');
//             //     }
//             // })

//             let dataMessage = message.channel.messages.cache.last()
//             let ajustMessage = dataMessage.content.split(' ')
//             ajustMessage.shift()
//             let lastMessage = ajustMessage.join(' ')

//             const optionsEmbed = {
//                 title: ''
//             }
//             const exampleEmbed = new EmbedBuilder()

//             if(lastMessage=='title') {
//                 message.channel.send(`${dataMessage.author.username},a continuación ingresa el título que quieres que tenga el embed.`)

//                 optionsEmbed.title = dataMessage.content

                

//                 const exampleEmbed = new EmbedBuilder()
//                 .setColor(0x0099FF)
//                 .setTitle(optionsEmbed.title)
//                 .setURL('https://discord.js.org/')
//                 .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
//                 .setDescription(`Esto fue escrito por ${dataMessage.author.username}`)
//                 .setThumbnail('https://i.imgur.com/AfFp7pu.png')
//                 .addFields(
//                     { name: 'Regular field title', value: 'Some value here' },
//                     { name: '\u200B', value: '\u200B' },
//                     { name: 'Inline field title', value: 'Some value here', inline: true },
//                     { name: 'Inline field title', value: 'Some value here', inline: true },
//                 )
//                 .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
//                 .setImage('https://i.imgur.com/AfFp7pu.png')
//                 .setTimestamp()
//                 .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

//                 message.channel.send({ embeds: [exampleEmbed] });
//             }

            
// return
            
//             setColor(0x0099FF)
//             .setTitle(optionsEmbed.title)
//             .setURL('https://discord.js.org/')
//             .setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
//             .setDescription(`Esto fue escrito por ${dataMessage.author.username}`)
//             .setThumbnail('https://i.imgur.com/AfFp7pu.png')
//             .addFields(
//                 { name: 'Regular field title', value: 'Some value here' },
//                 { name: '\u200B', value: '\u200B' },
//                 { name: 'Inline field title', value: 'Some value here', inline: true },
//                 { name: 'Inline field title', value: 'Some value here', inline: true },
//             )
//             .addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
//             .setImage('https://i.imgur.com/AfFp7pu.png')
//             .setTimestamp()
//             .setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });
    
            
//         }
//     })



// client.login(process.env.DISCORD_TOKEN);