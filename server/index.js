const newrelic = require('newrelic');
const app = require('./app');

const port = 3000;

app.listen(port, () => {
  console.log(`Listening at localhost:${port}`);
});