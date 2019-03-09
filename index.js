// play this: https://www.youtube.com/watch?v=d-diB65scQU

// code away!
const server = require('./api/server.js')

const port = 7000

server.listen(port, () => console.log(`Server is litening to port ${port}`))