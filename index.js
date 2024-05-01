import express from 'express'
import { createServer } from 'node:http'

const app = express()
const server = createServer(app)

app.get('/', (req, res) => {
    res.send('<h1>Hello ChatApp</h1>')
})

server.listen(3000, () => {
    console.log("server on http://localhost:3000")
})





