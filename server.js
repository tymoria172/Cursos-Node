//inicio do curso vamos iniciar um server local para conseguirmos trabalhar.

const htttp = require("http")
const host = "127.0.0.1"
const port = 3000


const server = htttp.createServer((req , res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Olá mundo /n codigo script node');
})

server.listen(port, host, () => {
    console.log(`server ins running at http://${host}:${port}`)
})