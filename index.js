const express=require("express")
const app=express()
const socketio=require('socket.io')

app.use(express.static(__dirname+'/public'));

const expressServer=app.listen(9000)
const io=socketio(expressServer)
io.on('connection',(socket)=>{
    socket.emit('messageFromServer',{data:'welcome to the socketio server'})
    socket.on('messageToServer',(datafromclient)=>{
        console.log(datafromclient)
    })

    socket.on('newMessageToServer',(msg)=>{
        // console.log(msg)
        io.emit('messageToClient',{text:msg.text})
    })
})
