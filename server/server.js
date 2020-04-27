const express = require('express');
const app = express();
const socket = require('socket.io');

const PORT = 3200
const server = app.listen(PORT, ()=> 
      console.log(`Server is listening on port ${PORT}`))

const io = socket(server);

io.on('connection', (socket)=> {
  console.log('Connected...', socket.id);

  socket.on('info', (data)=>{
    socket.broadcast.emit('message', data)
  })
})