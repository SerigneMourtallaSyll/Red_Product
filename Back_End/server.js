const http = require('http');
const app = require('./index')
const server = http.createServer(app);

server.listen(3001, () => {
    console.log("Serveur is running");
  });