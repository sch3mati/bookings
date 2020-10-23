const cassandra = require('cassandra-driver');

const client = new cassandra.Client({ contactPoints: ['127.0.0.1:9042'], keyspace: 'bookings', localDataCenter: 'datacenter1' });

client.connect((err) => {
  if (err) {
    console.log('error', err);
  } else {
    console.log('connected to cassandra');
  }
});

module.exports = client;