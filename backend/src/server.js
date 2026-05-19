require('dotenv').config();

const http = require('http');

const { Server } = require('socket.io');

const app = require('./app');

const connectDB = require('./config/db');

connectDB();

const server = http.createServer(app);

const io = new Server(server,{

  cors:{
    origin:'*'
  }

});

io.on('connection',(socket)=>{

  console.log('User Connected');

  socket.on('join_room',(roomId)=>{

    socket.join(roomId);

  });

  socket.on('send_message',(message)=>{

    io.to(message.chat).emit(
      'receive_message',
      message
    );

  });

  socket.on('typing',(roomId)=>{

    socket.to(roomId).emit('typing');

  });

  socket.on('stop_typing',(roomId)=>{

    socket.to(roomId).emit('stop_typing');

  });

  socket.on('disconnect',()=>{

    console.log('User Disconnected');

  });

});

server.listen(process.env.PORT,()=>{

  console.log(
    `Server Running On ${process.env.PORT}`
  );

});