const users = require('./classes/cusers');
const aclass = require('./classes/AClass');

const router = (app) => {
  app.get('/', (request, response) => {
    response.send({
      message: 'Node.js and Express REST API',
    });
  });
  app.get('/users', (request, response) => {
    response.send(users);
  });
  app.get('/classes', (request, response) => {
    const lclass = new aclass.AClass(1, 2);
    response.send(lclass);
  });
};

module.exports = router;
