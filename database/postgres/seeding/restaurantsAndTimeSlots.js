const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const db = require('../index.js');
let writer = csvWriter();
let writer2 = csvWriter();

let restaurantId = 0;
let timeSlotId = 0;

const restaurantEnding = ['Cafe', 'Restaurant', 'Steak House', 'Pizza House', 'Diner', 'Eatery', 'Joint', 'Canteen', 'BBQ', 'Chophouse', 'Bar', 'Bistro', 'Sandwiches'];
let seatCapacities = [];

const dataGen = async () => {
  const createRestaurantTable = async () => {
    writer.pipe(fs.createWriteStream('restaurantInfo.csv'));
    for (let i = 0; i < 10000000; i++) {
      let cap = faker.random.number({min:12, max: 50})
      seatCapacities.push(cap);
      writer.write({
        id: restaurantId,
        seatCapacity: cap,
        name: `${faker.name.firstName()}'s ${restaurantEnding[Math.floor(Math.random() * 13)]}`,
      });
      restaurantId++;
    }
    writer.end();
    console.log('generated restaurant csv');
  }
  await createRestaurantTable();
  db.query("COPY restaurants (id, seatCapacity, name) FROM '/Users/victoriachen/Desktop/SDC-project/bookings-service/restaurantInfo.csv' DELIMITERS ',' CSV HEADER;", (err, res) => {
    if (err) {
      console.log(err)
    } else {
      console.log('restaurant query completed', res)
    }
  })
}

dataGen();

let minutes;
let hours = 10;

const dataGenForTime = async () => {
  const createTimeSlotTable = async () => {
    writer2.pipe(fs.createWriteStream('timeSlots.csv'));
    for (let i = 0; i < 10; i++) {
      let currDate = new Date();
      for (let k = 0; k < 91; k++) {
        currDate = new Date(currDate.setDate(currDate.getDate() + 1))
        for (let j = 0; j < 21; j++) {
          if (j % 2 === 1) {
            minutes = 30
          } else {
            minutes = '00'
            if (hours < 21) {
              hours++
            } else {
              hours = 11;
            }
          }
          writer2.write({
            id: timeSlotId,
            date: currDate,
            time: `${hours}:${minutes}:00`,
            seatCapacity: faker.random.number({min:12, max: seatCapacities[i]}),
            restaurantId: i,
          });
          timeSlotId++;
        }
      }
    }

    writer2.end();
    console.log('generated time slot csv');
  }
  await createTimeSlotTable();
  db.query("COPY timeSlots (id, date, time, seatCapacity, restaurantId) FROM '/Users/victoriachen/Desktop/SDC-project/bookings-service/timeSlots.csv' DELIMITERS ',' CSV HEADER;", (err, res) => {
    if (err) {
      console.log(err)
    } else {
      console.log('time slot query completed', res)
    }
  })
}

dataGenForTime();

