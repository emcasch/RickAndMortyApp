const http = require('http');
const { getCharById } = require('../controllers/getCharById.js');
const { getCharDetail } = require('../controllers/getCharDetail.js');

http.createServer((req, res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');

    let id = req.url.split("/").at(-1)

    if(req.url.includes("onsearch")){
        getCharById(res, id)
    }

    if(req.url.includes("detail")){
        getCharDetail(res, id)
    }


}).listen(3001, "localhost");