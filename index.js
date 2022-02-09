const Discord = require('discord.js') //import discord.js
const client = new Discord.Client({ //Create a new discord client
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS//what your bot intents to do
    ],
    partials: [
        'MESSAGE', 'REACTION'
    ]})

const config = require('./config.json')


client.on('ready', () => { //
    let handler = require('./command-handlers') //import command-handler file
    if(handler.default) handler = handler.default // You always get the same result

    handler(client)// Call handler and pass our bot
    console.log('The bot is ready!')

    //slash command
    //guild and global(long time)
    // const guildID = '625563992538087424'
    // const guild = client.guilds.cache.get(guildID)
    // let commands
    //
    // if(guild){
    //     commands = guild.commands
    // } else{
    //     commands = client.application?.commands
    // }
    // commands?.create({
    //     name:'ping',
    //     description:'Replies with pong.',
    // })
    //
    // commands?.create({ //addition
    //     name: 'add',
    //     description: 'Adds two numbers.',
    //     options:[{
    //         name:'num1',
    //         description:'The first numbers.',
    //         required: true,
    //         type: Discord.Constants.ApplicationCommandOptionTypes.NUMBER
    //     },{
    //         name:'num2',
    //         description: 'The second numbers.',
    //         required: true,
    //         type: Discord.Constants.ApplicationCommandOptionTypes.NUMBER
    //     }]
    // })

})
// client.on('interactionCreate', async (interaction) =>{
//     if(!interaction.isCommand()){
//         return
//     }
//
//     const {commandName, options} = interaction
//     if(commandName === 'ping'){
//         interaction.reply({
//             content:'pong',
//             ephemeral: true, //visible to others or not(if true then only you can see it)
//         })
//     } else if(commandName === 'add'){
//         const num1 = options.getNumber('num1') || 0
//         const num2 = options.getNumber('num2') || 0
//
//         interaction.editReply({
//             content: `The sum is ${num1 + num2}`,
//             ephemeral: true,
//         })
//
//     }
// })

client.on("messageCreate", (message) => {
    // if (message.content.startsWith("ping")) {
    //     message.channel.send("pong!");
    // } else
    //
    // if (message.content.startsWith("foo")) {
    //     message.channel.send("bar!");
    // }

    if (message.author.bot) return

    if (message.content.toLowerCase().startsWith('+ ')){
        message.channel.send(message.content.replace('+ ', ''))
        message.delete()
    }
})

client.on('messageReactionAdd', (reaction, user) => {
    // console.log("test")
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id);
    if (reaction.message.id === '933652143888551936') {
        switch (name) {
            case '🍎': // Use \:apple: to get the emoji
                member.roles.add('933647239170129951');
                break;
            case '🍌':
                member.roles.add('933647393000394772');
                break;
            case '🍇':
                member.roles.add('933647628409909269');
                break;
            case '🍑':
                member.roles.add('933647689957146665');
                break;
        }
    }
});

client.on('messageReactionRemove', (reaction, user) => {
    const { name } = reaction.emoji;
    const member = reaction.message.guild.members.cache.get(user.id);
    if (reaction.message.id === '933652143888551936') {
        switch (name) {
            case '🍎':
                member.roles.remove('933647239170129951');
                break;
            case '🍌':
                member.roles.remove('933647393000394772');
                break;
            case '🍇':
                member.roles.remove('933647628409909269');
                break;
            case '🍑':
                member.roles.remove('933647689957146665');
                break;
        }
    }
});
client.login(config.token)