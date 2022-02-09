var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer:{
        headless: true
    }
})

module.exports = {
    callback:(message, ...args) => {

            const image_query = args.join(' ');
            if (!image_query) {
                message.reply('Please enter an image name')
            }

            google.scrape(image_query, 50).then((image_results) => {
                message.reply(image_results[Math.floor(Math.random() * image_results.length)].url);
            })
                .catch((error) => {
                    message.reply('Please try again.');
                })
    },
}