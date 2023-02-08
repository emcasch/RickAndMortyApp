const http = require('http');
const characters = require('../utils/data');

http.createServer((req, res)=>{
    if(req.url.includes("rickandmorty/character")){
        let url = req.url.split("/").at(-1)

        let characterFilter = characters.find( elem => elem.id === Number(url) )
        console.log(characterFilter)

        res.writeHead(200, { "Content-type": "application/json" })
        res.end(JSON.stringify(characterFilter))
    }
}).listen(3001, "localhost");