const users = require('./classes/cusers');

const router = (app) => {
  app.get('/', (request, response) => {
    response.send({
      message: 'Node.js and Express REST API',
    });
  });
  app.get('/users', (request, response) => {
    response.send(users);
  });
};

module.exports = router;
