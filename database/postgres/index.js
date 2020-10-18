const { Client } = require('pg');
const client = new Client({
  user: 'victoriachen',
  database: 'bookings',
});

client.connect(err => {
  if (err) {
    console.log('error connecting to pg: ', err.stack);
  } else {
    console.log('Connected to pg');
  }
});

module.exports = client;
