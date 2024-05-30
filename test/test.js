import express from 'express'
import { createServer } from 'node:http'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { Server } from 'socket.io'

import { default as config } from "../config.js"
import  registerMessageHandler from "../messageHandler.js"

const app = express()
const server = createServer(app)
const io = new Server(server)

const __dirname = dirname(fileURLToPath(import.meta.url))

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'msgwindow.html'))
})

io.on('connection', (socket) => {
  registerMessageHandler(io, socket)
  console.log("test user connected!")
})

server.listen(config.TST_PORT, () => {
  console.log('test server running at http://localhost:' + config.TST_PORT)
})