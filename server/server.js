const socket = require('socket.io');
const dbName = 'matchboard';
const PORT = 3200

const { mongoose, express, app, pwencrypt } = require('mongoosy')({
  // settings for mongoosy
  connect: {
    url: 'mongodb://localhost/' + dbName
  },
  login:{
    encryptionSalt: 'super-user'
  }
});


const User = require('./models/User')
const createUser = async () => {
  let user = await User.findOne({username:'admin'})
  console.log(user);
  
  if (user) { return }
  user = new User({
    username: 'admin',
    password: pwencrypt('super'),
    roles: ['admin']
  })
  await user.save()
} 

// createUser()



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