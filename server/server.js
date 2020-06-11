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

const socketLog = (room, origin, datatype, timeAtRequest) => {
  console.log(origin + " called get " + datatype +" at:")
  console.log("" + new Date(timeAtRequest))
  console.log("in room: " + room)
  console.log("current server time:")
  console.log("" + new Date()) //TODO use Date.now() + 3000 ?
  let timedifference = Date.now() - timeAtRequest //TODO use Date.now() + 3000 ?
  console.log("Time since request: " + timedifference + "ms") //under the assumption that clocks are in sync
  console.log("assuming synchronized clocks")

}

//SOCKET CONNECTION
const io = socket(server);
const names = {}
io.on('connection', (socket)=> {
  console.log('Connected...', socket.id);
 /*
  socket.on('scoreInfo', (data)=>{
    io.emit('scoreInfo', data)
  })
*/
  socket.on('timeInfo', (data)=>{
    //to(data.room).
    //io.to(data.room).emit('timeInfo', data)
    socket.to(data.room).broadcast.emit('timeInfo', data)
  })

  socket.on('board', (data)=>{
    io.emit('board', data)
  })

  socket.on('join-room', (room, name)=>{
    socket.join(room);
    console.log("socket: " + socket.id)
    console.log("with name: " + name)
    console.log("has joined room: " + room)
    names[socket.id] = name
    //console.log(names)
  });

  socket.on('disconnect', function () {

    console.log(names[socket.id] + " has disconnected")
    delete names[socket.id]
    //console.log(names)

});


  socket.on('getData', (payload)=>{

    //console.log("getData called")
    //consider what happens if there are multiple remote controllers

    console.log(payload)

    const { room, origin, datatype, timeAtRequest } = payload;
    //socketLog(room, origin, datatype, timeAtRequest)

    if(datatype == "time"){
      //console.log("requested game time")
      socket.to(room).broadcast.emit("getTime", origin, timeAtRequest, Date.now())
    } else if (datatype == "gamedata"){
      //console.log("requsted game data")
      socket.to(room).broadcast.emit("getGameData", origin, timeAtRequest, Date.now())
    } else if (datatype == "gamestats");{
      //console.log("requested game statistics")
      socket.to(room).broadcast.emit("getGameStats", origin, timeAtRequest, Date.now())
    }
  })

  socket.on('fetchTime', (data) => {
    //console.log("fetchTime called from: " + socket.id)
    //console.log(data)
    socket.broadcast.emit("fetchTime", data)
  })

  socket.on('fetchGameData', (data) => {
    //console.log("fetchGameData called from: " + socket.id)
    //console.log(data)
    socket.broadcast.emit("fetchGameData", data)
  })
  //fetchGameStats
  socket.on('fetchGameStats', (data) => {
    //console.log("fetchGameStats called from: " + socket.id)
    //console.log(data)
    socket.broadcast.emit("fetchGameStats", data)
  })

  socket.on('timesync', (data)=>{

    //console.log("time sync called")

    //console.log(data)

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