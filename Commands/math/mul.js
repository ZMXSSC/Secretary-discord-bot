module.exports = {
    callback:(message, ...args) =>{
        let mul = 1

        for(const arg of args){
            mul *= parseInt(arg)
        }

        message.reply(`The multiplication is ${mul}`)
    },
}