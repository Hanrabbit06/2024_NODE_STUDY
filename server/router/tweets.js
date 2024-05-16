const express = require('express')

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
router.get('/', (req, res, next) =>{
    res.status(200).json(tweets)
})

//CREATE
router.post('/', (req, res, next) => {
    const {text, name, username} = req.body
    const tweet = {
        id: Date.now().toString(),
        text: text,
        createdAt: Date.now().toString(),
        name: name,
        username: username
    }
    //새로운 게시글이 가장 앞으로 나오게
    tweets = [tweet, ...tweets]
    //201 : 요청이 성공적이었으며 그 결과로 새로운 리소스가 생성
    res.status(201).json(tweets)
})
//UPDATE
router.put('/:id', (req,res,next)=>{
    const id = req.params.id
    const text = req.body.text
    const tweet = tweets.find(tweet=>tweet.id===id)
    if(tweet){
        tweet.text = text
        res.status(200).json(tweet)
    }else{
        res.status(404).json({message: "게시글을 찾지 못했습니다."})
    }
})

//DELETE
router.delete('/:id', (req,res,next)=> {
    const id =  req.params.id
    //특정id에 해당하는 게시글을 삭제
    tweets = tweets.filter(t=>t.id !== id)
    res.sendStatus(204)
})


router.put('/:id', (req,res,next)=> {
    const id = req.params.id;
})

module.exports = router