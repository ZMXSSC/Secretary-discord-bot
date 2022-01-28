module.exports = {
    callback:(message, ...args) =>{
        console.log(args)
        message.reply('Owner\'s favorite game is World of Warcraft')
    },

}