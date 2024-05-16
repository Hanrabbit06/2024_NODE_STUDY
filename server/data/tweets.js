let tweets = [
    {
        id: '1',
        text: '안녕하세요',
        createdAt: Date.now().toString(),
        name: '김독자',
        username: 'abc'
    }
]

const tweetRepositiry = {
    create : (text, name, username)=> {
        const tweet = {
            id: Date.now().toString(),
            text: text,
            createdAt: Date.now().toString(),
            name: name,
            username: username  
        }
        tweets = [tweet, ...tweets]
        return tweet
    },

    getAll : () => tweets,

    update: (id, text) => {
        const tweet = tweets.find(tweet=> tweet.id === id)
        if(tweet)
            tweet.text = text
        return tweet
    },

    remove: id => tweets = tweets.filter(t=>t.id !== id)
}

module.exports = tweetRepository