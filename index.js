// definition of my programs
const console = require('console');
const bodyparser = require('body-parser');
const express = require('express');
const routes = require('./routes/routes');

const port = 3001;
const app = express();
app.port = port;
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
  extended: true,
}));

routes(app);

const server = app.listen(port, (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log(`Server listening on port ${server.address().port}`);
});
// end of file.
