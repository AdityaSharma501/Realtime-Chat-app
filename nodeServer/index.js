//node servver which will handle socket io conneciton
const {Server} = require("socket.io");
//const cors = require("cors")
const io =new Server(3000,{
    cors:{
        origin:"https://127.0.0.1:5500",
        transports: ['websocket']
    },
    
});

io.on("connection",socket =>{
    socket.emit("check","heelo world");
    
       
    // socket.on("user-joined",fname=>{
    //     console.log(fname);
    //     console.log("fname aa gya");
    // });

socket.on("message",(obj)=>{
    socket.broadcast.emit("sendthis",obj);
    console.log(obj);
    //console.log(user,"joined");
})
        
    });
        

       

       

       



const users={};







// //node servver which will handle socket io conneciton
// const io = require('socket.io')(8000);
// //const cors = require("cors")

// const users={};
// console.log('new user');
// io.on('connection',socket =>{
//     socket.on('new-user-joined',mame =>{
//        console.log('new user',mame);
//         users[socket.id]=mame;
//         socket.brodcast.emit('user-joined')
//     });

//     socket.on('send',message =>{
//         socket.brodcast.emit('receive',{message,name:user[socket.id]})
//     });
// })


// //node servver which will handle socket io conneciton
// const io = require('socket.io')(8000)
// const cors = require("cors")

// const users={};

// io.on('connection',socket =>{
//     socket.on('new-user-joined',name =>{
//        console.log('new user',name)
//         users[socket.id]=name;
//         socket.brodcast.emit('user-joined')
//     });

//     socket.on('send',message =>{
//         socket.brodcast.emit('receive',{message,name:user[socket.id]})
//     });
// })





//node servver which will handle socket io conneciton
// const express = require('express')
// const http = require('http')
// const app = express()

// const cors = require("cors")
// app.use(
//     cors({
//         origin:"*",
//         //transports: ['websocket', 'polling'],
//     })
// )
// const server = http.createServer(app)

// const io = require('socket.io')(server);

// const users={};

// io.on('connection',socket =>{
//     socket.on('new-user-joined',name =>{
//        console.log('new user',name)
//         users[socket.id]=name;
//         socket.brodcast.emit('user-joined')
//     });

//     socket.on('send',message =>{
//         socket.brodcast.emit('receive',{message,name:user[socket.id]})
//     });
// })

// server.listen(8000,console.log("server is up on port 8000"))
