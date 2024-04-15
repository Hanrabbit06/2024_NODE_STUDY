const express = require('express')
const path = require('path')    //node에서 기본으로 제공하는 패키지
const app = express()
const port = 3000

app.set('views', 'templates'); //뷰 디랙토리를 'templates'로 설정
app.set('view engine', 'ejs'); //뷰 엔진을 EJS로 설정

app.use('/html', express.static(path.join(__dirname,'html')))

//get method 요청에 대한 라우팅
app.get('/', (req, res) => {
    const data = {
        name: 'JWP',
        age: 19,
        skills: ['JavaScript', 'Node.js', 'Express']
    };
    res.render('index', data);
});

//localhost:3000/test/JWP?lang=ko
app.get('/test/:name', (req,res)=> {
    console.log('path',req.path)        //'/test/JWP'
    console.log('params',req.params)    //{name: 'JWP}
    console.log('query',req.query)      //{lang: 'ko'}
    res.send('콘솔 보세요')
})

app.listen(port, ()=>{
    console.log(`listening on port ${port}`)
})