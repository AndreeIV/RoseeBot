const { SoundCloudPlugin } = require('@distube/soundcloud');
const { SpotifyPlugin } = require('@distube/spotify');
const { YtDlpPlugin } = require('@distube/yt-dlp');
const { EmbedBuilder } = require('discord.js');
const { DisTube } = require('distube');


module.exports = (client) => {
    client.distube = new DisTube(client, {
        emitNewSongOnly: false,
        leaveOnEmpty: true,
        leaveOnFinish: true,
        leaveOnStop: true,
        savePreviousSongs: true,
        emitAddSongWhenCreatingQueue: false,
        searchSongs: 1,
        nsfw: false,
        emptyCooldown: 25,
        ytdlOptions: {
            highWaterMark: 1024 * 1024 * 64,
            quality: 'highestaudio',
            format: 'audioonly',
            liveBuffer: 60000,
            dlChunkSize: 1024 * 1024 * 4,
        },
        plugins: [
            new YtDlpPlugin({
                update: true
            }),
            new SpotifyPlugin({
                parallel: true,
                emitEventsAfterFetching: true
            }),
            new SoundCloudPlugin()
        ]

        
    })

    
    // console.log(message)
    // console.log(song)


    client.distube.on("addList", (queue, song) => {

        queue.textChannel.send(`PlayList: \n**${song.name} - ${song.user.tag}`)
    });

    client.distube.on("addSong", (queue, song) => {
        
        console.log(song.name)


        queue.textChannel.send({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Añadido a la cola: \n\`${song.name} - ${song.formattedDuration}\``)
                .setThumbnail(song.thumbnail)
                .setColor('DarkGrey')
                .setFooter({text: `Añadido por ${song.user.tag}`, iconURL: song.user.displayAvatarURL({dynamic: true})})
            ]

            // `ñadido a la cola, **${song.name}** - **${song.formattedDuration}** ***${song.user.tag}***`
        })
    });

    client.distube.on("playSong", (queue, song) => {

        console.log(song.name)

        queue.textChannel.send({
            embeds: [
                new EmbedBuilder()
                .setTitle(`Reproduciendo ahora: \n\`${song.name} - ${song.formattedDuration}\``)
                .setThumbnail(song.thumbnail)
                .setColor('DarkGrey')
                .setFooter({text: `Añadido por ${song.user.tag}`, iconURL: song.user.displayAvatarURL({dynamic: true})})
            ]
        })
        
    })

    // client.distube.on("playList", (message, queue, playList) => message.channel.send(`Reproduciendo PlayList: **${playList.name}** - **${playList.formattedDuration}** ***${message.author}***`))

    // client.distube.on("intiQueue", (queue) => {
    //     queue.autoplay = false;
    //     queue.volume = 200;
    // })

    


}
