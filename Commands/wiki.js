module.exports = {
    callback:(message, ...args) =>{
        console.log(args)
        let st = "https://en.wikipedia.org/wiki/";
        st = st.concat('', args.join('_'))
        message.reply(st)
    },

}