const http = require('http');

const server = http.createServer((req,res)=>{
    console.log(req)
    if(req.url ==='/'){
            res.end('Welcome babina to our homepage');
    }
    if(req.url ==='/about'){
        res.end('Here is our short history')
    }
    res.end(`
    <h1>Oops</h1>
    <a herf ="/">back home</a>
    `)

})


server.listen(5000)

