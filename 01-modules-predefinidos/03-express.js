const colors = require('colors')
const express = require('express')
const server = express();

server.get('/', function(req, res){
    res.send("<h1>Gel</h1>")
    res.end()
})

server.listen(3000, ()=>{
    console.log('Server on port 3000'.red)
})
