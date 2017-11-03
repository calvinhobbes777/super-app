const hapi = require("hapi");
const api = require("./api");

const server = new hapi.Server();

server.connection({
  host: "localhost",
  port: 4040,
  routes: { cors: true },
  router: { stripTrailingSlash: true }
});

server.register(
  [
    {
      register: api
    }
  ],
  () => {
    server.start(err => {
      if (err) {
        console.log(err);
      } else {
        console.log(server.info.uri);
      }
    });
  }
);
