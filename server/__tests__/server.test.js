const { httpServer, io } = require('../server');

beforeAll((done) => {
  httpServer.listen(() => {
    done();
  });
});

afterAll(() => {
  return new Promise((resolve) => {
    httpServer.close(() => {
      resolve();
    });
  });
});

test('should broadcast message to all clients on "chat message"', (done) => {
  const client1 = io(`http://localhost:${httpServer.address().port}`);
  const client2 = io(`http://localhost:${httpServer.address().port}`);

  client1.on('connect', () => {
    client2.on('chat message', (msg) => {
      expect(msg).toBe('Hello, world!');
      client1.disconnect();
      client2.disconnect();
      done();
    });

    client1.emit('chat message', 'Hello, world!');
  });
});
