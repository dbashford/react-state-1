import { RouteBuilder } from 'hapi-route-builder';
let catalog = require('../data/catalog.json');

const get = function() {
  return new RouteBuilder()
    .get('/api/catalog', (request, reply) => {
      setTimeout( () => {
        reply(catalog);
      }, 2000);
    })
    .build();
};

// const put = function() {
//   return new RouteBuilder()
//     .put('/api/settings', (request, reply) => {
//       state.settings = request.payload;
//       setTimeout( () => {
//         reply().code(204);
//       }, 2000);
//     })
//     .build();
// };

module.exports = function(server, go) {
  server.route(get());
  // server.route(put());
};