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

const addRestaurant = (name, seatCapactiy) => {
  client.query(`insert into restaurants (seatCapacity, name) values ("${seatCapactiy}", ${name})`, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

const addReservation = (data, callback) => {
  let dateArr = data.date.split(' ');
  let month = dateArr[0].slice(0, 3);
  let day = dateArr[1].split('');
  day.pop();
  day = day.join('');
  let date = month + day;
  let hour = dateArr[3].split(':');
  if (hour[0].length === 1) {
    hour[0] = '0' + hour[0];
  }
  if (dateArr[dateArr.length - 1][0] === 'P') {
    hour[0] = (Number(hour[0]) + 12).toString();
  }
  let time = hour.join(':') + ':00';

  let returnTimeSlotId;

  client
    .query(`insert into timeSlots (date, time, restaurantId) values ('${date}', '${time}', ${data.restaurantId}) returning id`)
    .then(result => {
      returnTimeSlotId = result.rows[0].id;
      client.query(`insert into reservations (timeSlotId, partySize, name, phone) values (${returnTimeSlotId}, ${data.partySize}, '${data.name}', '${data.contactInfo}')`, (err, result2) => {
        if (err) {
          callback(err);
        } else {
          callback();
        }
      });
    });

};

const getRestaurantName = (restaurantId, callback) => {
  client.query(`select name from restaurants where id = ${restaurantId}`, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data.rows);
    }
  });
};

const getReservations = (data, callback) => {
  const timeRange = 2.5 * 60 * 60 * 1000;
  client.query(`select partySize, date, time from timeslots inner join reservations on (timeslots.id = reservations.timeslotId) where restaurantId = ${data.restaurantId}`, (err, reservationData) => {
    if (err) {
      callback(err);
    } else {
      client.query(`select seatCapacity from restaurants where id = ${data.restaurantId}`, (err, restaurantData) => {
        if (err) {
          callback(err);
        } else {
          callback(null, reservationData.rows, restaurantData.rows);
        }
      });
    }
  });

};


module.exports.addRestaurant = addRestaurant;
module.exports.addReservation = addReservation;
module.exports.getReservations = getReservations;
module.exports.getRestaurantName = getRestaurantName;

// module.exports = client;
