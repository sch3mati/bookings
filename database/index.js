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

const addReservation = (restaurantId, name, contactInfo, partySize, date, occasion = null) => {
  dbConnection.query(`insert into reservations (restaurantId, name, contactInfo, partySize, date, occasion) values ("${restaurantId}", "${name}", "${contactInfo}", ${partySize}, ${date}, "${occasion}")`, (err, data) => {
    if (err) {
      console.log(err);
    }
  });
};



module.exports.addRestaurant = addRestaurant;
module.exports.addReservation = addReservation;