var Twitter = require('twitter');
require('dotenv').config();

var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
});
  
const gettweets = (req, res) => {
    client.get('search/tweets', {q: '#' + req.body.hashtag , count : 20}).then(data => res.json(data.statuses))
    .catch(err => res.status(400).json("API Error"));
}

module.exports = {
    gettweets
}