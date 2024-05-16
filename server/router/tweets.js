const express = require('express')
const tweetControll = require('../controller/tweets')

let tweets = [
    {
        id: '1',
        text: '안녕하세요',
        createdAt: Date.now().toString(),
        name: '김독자',
        username: 'abc'
    }
]

const router = express.Router()

//READ
router.get('/', tweetControll.getTweet)

//CREATE
router.post('/', tweetControll.createTweet)

//UPDATE
router.put('/:id', tweetControll.updateTweet)

//DELETE
router.delete('/:id', tweetControll.eleteTweet)


router.put('/:id', (req,res,next)=> {
    const id = req.params.id;
})

module.exports = router