import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors())

const users = [];
const tweets = [];

app.post('/sign-up', (req, res) => {
    users.push({
        username: req.body.username,
        avatar: req.body.avatar
    })
    res.send("OK");
});

app.post('/tweets', (req, res) => {
    let avatar = users.find(user => user.username === req.body.username)
    tweets.push({
        username: req.body.username,
        tweet: req.body.tweet,
        avatar: avatar.avatar
    })
    res.send("OK");
});

app.get('/tweets', (req, res) => {
    const lastTweets = tweets.slice(-10);

    res.send(lastTweets);   
});

app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(5000);