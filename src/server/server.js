import {Server} from 'hapi';
import inert from 'inert';
import api from './api';
import generateIndexPage from './index.html.js'

const host = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || 8000;
const server = new Server();
server.connection({host, port});

server.register([inert], (err) => {
  if (err) {
    throw err;
  }

  server.start( () => {
    console.info('==> ✅  Server is listening');
    console.info('==> 🌎  Go to ' + server.info.uri.toLowerCase());
  });
});

api(server);

server.route({
  method: 'GET',
  path: '/{params*}',
  handler: {
    file: (request) => "static" + request.path
  }
});

server.ext("onPreResponse", (request, reply) => {
  if (typeof request.response.statusCode !== "undefined") {
    return reply.continue();
  }

  // Gets this far, is looking for index page
  const location = (process.env.NODE_ENV === "production" ? "" : "//localhost:3000") + "/static/client.js";
  var indexHtml = generateIndexPage(location);
  reply(indexHtml);
});
