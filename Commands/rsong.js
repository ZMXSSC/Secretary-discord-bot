const {youtube} = require("scrape-youtube");

module.exports = {
    callback:(message, ...args) =>{
        const artist_query = args.join(' ');
        youtube.search(artist_query).then((results) => {
            // Unless you specify a custom type you will only receive 'video' results
            // console.log(results.videos.length)
            message.reply(results.videos[Math.floor(Math.random() * results.videos.length)].link)
        });
    },
}