const server = http.createServer((request, response) => {
    const { httpVersion } = request.socket.parser;
    console.log(`HTTP/${httpVersion} request received`);
    response.end('Hello, World!');
  });
  
  server.on('connection', (socket) => {
    const { parser } = socket;
    if (parser) {
      const { httpVersion } = parser;
      console.log(`HTTP/${httpVersion} request received`);
    }
  });
  
  server.listen(3000);