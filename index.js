// definition of my programs
const console = require('console');
const bodyparser = require('body-parser');
const express = require('express');
const routes = require('./routes/routes.js');

const port = 3001;
const app = express();
app.port = port;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true,
}));

routes(app);

// eslint-disable-next-line consistent-return
const server = app.listen(port, (error) => {
  console.log(`Server listening on port ${server.address().port}`);
  if (error) {
    console.log('Error');
  }
});

// end of file.
