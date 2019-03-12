// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!

// const express = require('express')

//
//const server = express()
const server = require('./api/server.js')


const port = 9090
//server.use('/api', index)


// server.use('/', (req, res) => {
//   res.status(200).send('Hello from express')
// })

server.listen(port, () => console.log(`Server is litening to port ${port}`))