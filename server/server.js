const socket = require('socket.io');
const dbName = 'matchboard';
const PORT = 3200

const { app } = require('mongoosy')({
  connect: {
    url: 'mongodb://localhost/' + dbName
  },
  login:{
    encryptionSalt: 'super-user'
  }
});


const server = app.listen(PORT, ()=> 
  console.log(`Server is listening on port ${PORT}`))

//SOCKET CONNECTION
const io = socket(server);
io.on('connection', (socket)=> {
  console.log('Connected...', socket.id);
 
  socket.on('scoreInfo', (data)=>{
    io.emit('scoreInfo', data)
  })

  socket.on('timeInfo', (data)=>{
    io.emit('timeInfo', data)
  })

  socket.on('board', (data)=>{
    io.emit('board', data)
  })
})