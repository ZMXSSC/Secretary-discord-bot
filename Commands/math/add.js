module.exports = {
    callback:(message, ...args) =>{
        let sum = 0

        for(const arg of args){
            sum += parseInt(arg)
        }

        message.reply(`The sum is ${sum}`)
    },
}