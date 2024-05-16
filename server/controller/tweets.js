const tweetRepositiry = require('../data/tweets')

const tweetControll = {
    //CREATE
    createTweet: (req, res, next) => {
        const {text, name, username} = req.body
        const tweet = tweetRepositiry.create(text, name, username)
        //201 : 요청이 성공적이었으며 그 결과로 새로운 리소스가 생성
        res.status(201).json(tweet)
    },
    //READ
    getTweet: (req, res, next) =>{
        const tweet = tweetRepositiry.getAll()
        res.status(200).json(tweets)
    },
    //UPDATE
    updateTweet: (req,res,next)=> {
        const id = req.params.id
        const text = req.body.text
        const tweet = tweetRepositiry.update(id, text)
        if(tweet){
            tweet.text = text
            res.status(200).json(tweet)
        }else{
            res.status(404).json({message: "게시글을 찾지 못했습니다."})
        }
    },
    //DELETE
    deleteTweet: (req,res,next)=> {
        const id =  req.params.id
        //특정id에 해당하는 게시글을 삭제
        tweetRepositiry.remove(id)
        res.sendStatus(204)
    }
}

module.exports = tweetControll