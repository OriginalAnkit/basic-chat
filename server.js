const express = require("express");
const server = express();
const socketio = require("socket.io");

const port = 4000;

server.use(express.static("./public"))


expressServer = server.listen(port, () => {
    console.log(`listening at ${port}`)
})

io = socketio(expressServer);

io.on("connection", (client) => {
    console.log("connetco", client.id)
    client.on("newmsg", (data) => {
        // console.log(data)
    })

    client.on("new_msg",(msg)=>{
        msg.ownerId=client.id
        io.emit("display_msg",msg)
    })
    client.on("disconnect",(data)=>{
        console.log(data)
    })

})

