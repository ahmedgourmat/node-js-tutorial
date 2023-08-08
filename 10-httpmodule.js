const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('Welcome it\'s home page')
    }
    if(req.url === '/about'){
        res.end('This is about page')
    }
    res.end(`
        <h1>OOPS !</h1>
        <p>There is nothing here</p>
        <a href='/'>Return to home Page</a>
    `)
})

server.listen(3000)