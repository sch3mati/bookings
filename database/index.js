const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const dbConnection = mysql.createConnection(mysqlConfig);

//Only used for seeding database
const addRestaurant = (name, seatCapactiy) => {
  dbConnection.query(`insert into restaurants (name, seatCapacity) values ("${name}", ${seatCapactiy})`, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

const addReservation = (data, callback) => {
  dbConnection.query(`insert into reservations (restaurantId, name, contactInfo, partySize, date, occasion) values ("${data.restaurantId}", "${data.name}", "${data.contactInfo}", ${data.partySize}, ${Date.parse(data.date)}, "${data.occasion ? occasion : null}")`, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback();
    }
  });
};



module.exports.addRestaurant = addRestaurant;
module.exports.addReservation = addReservation;