const socket = require('socket.io');
const dbName = 'matchboard';
const PORT = 3200

const { mongoose, express, app, pwencrypt } = require('mongoosy')({
  // settings for mongoosy
  connect: {
    url: 'mongodb://localhost/' + dbName
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

  socket.on('getTime', (data)=>{
    console.log(data + " called")
    console.log("getting time called")
    socket.broadcast.emit("getTime", data)

  })

  socket.on('fetchTime', (data) => {
    console.log("fetching")
    socket.broadcast.emit("fetchTime", data)
  })

  socket.on('confirmation', (data)=>{
    console.log(data)
    //io.emit('board', data)
  })

  socket.on('timesync', (data)=>{
    //console.log(socket.id)

    setTimeout(() => {

      //console.log("timesync called from " )
      console.log("timesync called from socket ID: " + socket.id)
      console.log("client timestamp: " +data)
  
      let timestamp = Date.now()
      //console.log(Date.now())
      /*
      setTimeout(() => {
        timestamp = Date.now()
      }, 25)
      */
  
      console.log("server timestamp " + timestamp)
  
      //let timestamp = Date.now()
      //socket.emit('timesync', 'do you think so?', Date.now() (answer) {});
      io.to(socket.id).emit('timesync', 'timestamp', timestamp);
      //io.to(socket.id).emit('timesync', 'I just met you')
      //  io.to(socketId).emit('hey', 'I just met you');
    }, 500)
    
    /*
    console.log("timesync called from " )
    console.log(socket.id)
    console.log(data)

    let timestamp;
    console.log("server timestamp: " + Date.now())
    /*
    setTimeout(() => {
      timestamp = Date.now()
    }, 25)
    */

    //console.log(timestamp)

    //let timestamp = Date.now()
    //socket.emit('timesync', 'do you think so?', Date.now() (answer) {});
    //io.to(socket.id).emit('timesync', 'do you think so?', timestamp);
    //io.to(socket.id).emit('timesync', 'I just met you')
    //  io.to(socketId).emit('hey', 'I just met you');
    
  })
  
  socket.on('synchronize', (name, word, fn) => {
    fn(name + ' says ' + word);
    console.log("syncing")
  }
  
  );
})