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
  dbConnection.query(`insert into reservations (restaurantId, name, contactInfo, partySize, date, occasion) values ("${data.restaurantId}", "${data.name}", "${data.contactInfo}", ${data.partySize}, ${Date.parse(data.date) - (Date.parse(data.date) % 1800000)}, "${data.occasion ? occasion : null}")`, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback();
    }
  });
};

const getRestaurantName = (restaurantId, callback) => {
  dbConnection.query(`select name from restaurants where id = ${restaurantId}`, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);
    }
  });
};

const getReservations = (data, callback) => {
  const timeRange = 2.5 * 60 * 60 * 1000;
  dbConnection.query(`select partySize, date from reservations where restaurantId = ${data.restaurantId} and date >= ${Date.parse(data.date) - timeRange} and date <= ${Date.parse(data.date) + timeRange}`, (err, reservationData) => {
    if (err) {
      callback(err);
    } else {
      dbConnection.query(`select seatCapacity from restaurants where id = ${data.restaurantId}`, (err, restaurantData) => {
        if (err) {
          callback(err);
        } else {
          callback(null, reservationData, restaurantData);
        }
      });
    }
  });
};


module.exports.addRestaurant = addRestaurant;
module.exports.addReservation = addReservation;
module.exports.getReservations = getReservations;
module.exports.getRestaurantName = getRestaurantName;