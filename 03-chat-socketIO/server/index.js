const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('client')); // va a cargar los html de ahí

app.get('/hello',(req, res)=>{
    res.status(200).send("Hola mundo desde el servidor")
})

var messages = [{
    id : 1,
    text : 'Bienvenido a mi chat',
    nickname : 'Bot'
}]

io.on('connection',(socket)=>{
    console.log("El Cliente con IP: "+socket.handshake.address+" Se ha conectado... ")
    socket.emit('messages',messages)
    socket.on('add-message',(data)=>{
        messages.push(data)
        io.sockets.emit('messages',messages)
    }) //Recoje el evento
})



server.listen(6677, ()=>{
    console.log('Server on port 6677')
})