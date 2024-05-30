const registerMessageHandler = (io, socket) => {
  const receiveMessage = (message) => {
    console.log(message)
  }

  socket.on("message", receiveMessage)
}

export default registerMessageHandler