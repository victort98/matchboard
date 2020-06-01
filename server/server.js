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


  socket.on('getData', (origin, datatype, clientTimestamp)=>{

    //consider what happens if there are multiple remote controllers

    console.log(origin + " called get " + datatype +" at:")
    console.log("" + new Date(clientTimestamp))
    console.log("current server time:")
    console.log("" + new Date()) //TODO use Date.now() + 3000 ?
    let timedifference = Date.now() - clientTimestamp //TODO use Date.now() + 3000 ?
    console.log("Time since request: " + timedifference + "ms") //under the assumption that clocks are in sync
    console.log("assuming synchronized clocks")

    if(datatype == "time"){
      console.log("requested game time")
      socket.broadcast.emit("getTime", origin, clientTimestamp, Date.now())
    } else if (datatype == "gamedata"){
      console.log("requsted game data")
      socket.broadcast.emit("getGameData", origin, clientTimestamp, Date.now())
    } else if (datatype == "gamestats");{
      console.log("requested game statistics")
      socket.broadcast.emit("getGameStats", origin, clientTimestamp, Date.now())
    }
  })

  socket.on('getTime', (data, clientTimestamp)=>{

    //consider what happens if there are multiple remote controllers
    console.log(data + " called getTime at:")
    console.log("" + new Date(clientTimestamp))
    console.log("current server time:")
    console.log("" + new Date()) //TODO use Date.now() + 3000 ?
    let timedifference = Date.now() - clientTimestamp //TODO use Date.now() + 3000 ?
    console.log("Time since request: " + timedifference + "ms") //under the assumption that clocks are in sync
    console.log("assuming synchronized clocks")
    //console.log("getting time called")
    socket.broadcast.emit("getTime", data, clientTimestamp, Date.now())
  })

  socket.on('getGameData', (data, clientTimestamp)=>{

    //consider what happens if there are multiple remote controllers
    console.log(data + " called getGameData at:")
    console.log("" + new Date(clientTimestamp))
    console.log("current server time:")
    console.log("" + new Date()) //TODO use Date.now() + 3000 ?
    let timedifference = Date.now() - clientTimestamp //TODO use Date.now() + 3000 ?
    console.log("Time since request: " + timedifference + "ms") //under the assumption that clocks are in sync
    console.log("assuming synchronized clocks")
    socket.broadcast.emit("getGameData", data, clientTimestamp, Date.now())
  })

  socket.on('getGameStats', (data, clientTimestamp)=>{

    //consider what happens if there are multiple remote controllers
    console.log(data + " called getGameStats at:")
    console.log("" + new Date(clientTimestamp))
    console.log("current server time:")
    console.log("" + new Date()) //TODO use Date.now() + 3000 ?
    let timedifference = Date.now() - clientTimestamp //TODO use Date.now() + 3000 ?
    console.log("Time since request: " + timedifference + "ms") //under the assumption that clocks are in sync
    console.log("assuming synchronized clocks")
    socket.broadcast.emit("getGameStats", data, clientTimestamp, Date.now())
  })

  socket.on('fetchTime', (data) => {
    console.log("fetchTime called from: " + socket.id)
    console.log(data)
    socket.broadcast.emit("fetchTime", data)
  })

  socket.on('fetchGameData', (data) => {
    console.log("fetchGameData called from: " + socket.id)
    console.log(data)
    socket.broadcast.emit("fetchGameData", data)
  })
  //fetchGameStats
  socket.on('fetchGameStats', (data) => {
    console.log("fetchGameStats called from: " + socket.id)
    console.log(data)
    socket.broadcast.emit("fetchGameStats", data)
  })

  socket.on('confirmation', (data)=>{
    console.log(data)
    //io.emit('board', data)
  })

  socket.on('timesync', (data)=>{

    setTimeout(() => {

      console.log("timesync called from socket ID: " + socket.id)
      console.log("client timestamp: " + data);
      //server clock is pretending to be 3 seconds ahead
      let timestamp = Date.now() + 3000;
      console.log("server timestamp " + timestamp);
  
      io.to(socket.id).emit('timesync', timestamp);

    }, 100)    
  });
  

})