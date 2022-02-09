module.exports = {
    callback:(message, ...args) =>{
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
        }
        if(args.length === 0){
            message.reply(`You rolled ${getRandomIntInclusive(1,6)}`)
        }
        else {
            message.reply(`You rolled ${getRandomIntInclusive(1, parseInt(args[0]))}`)
        }
    },
}