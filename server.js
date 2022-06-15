const express = require ('express');
const hashtag = require ('./hashtag');
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World')
});

app.post('/gettweets', (req, res) => {hashtag.gettweets(req, res)})

 


app.listen(process.env.PORT,()=>{
    console.log(`app is working on port ${process.env.PORT} `)
});