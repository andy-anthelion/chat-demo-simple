import { Server } from "socket.io"
import { default as config } from "./config.js"
import  registerMessageHandler from "./messageHandler.js"

const io = new Server()

const onConnection = (socket) => {
  registerMessageHandler(io, socket)
  console.log("Connected!")
}

io.on("connection", onConnection)
io.listen(config.APP_PORT)