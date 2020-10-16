const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
const db = require('../index.js');
let writer = csvWriter();

let restaurantId = 0;

const restaurantEnding = ['Cafe', 'Restaurant', 'Steak House', 'Pizza House', 'Diner', 'Eatery', 'Joint', 'Canteen', 'BBQ', 'Chophouse', 'Bar', 'Bistro', 'Sandwiches'];

const dataGen = async () => {
  const createRestaurantTable = async () => {
    writer.pipe(fs.createWriteStream('restaurantInfo.csv'));
    for (let i = 0; i < 10000000; i++) {
      writer.write({
        id: restaurantId++,
        name: `${faker.name.firstName()}'s ${restaurantEnding[Math.floor(Math.random() * 13)]}`
        seatCapacity: faker.random.number({min:12, max: 50}),
      });
      restaurantId++;
    }

    writer.end();
    console.log('generated csv');
  }
  await createRestaurantTable();
  db.query("COPY restaurants (id, seatCapacity, name) FROM '/Users/victoriachen/Desktop/SDC-project/bookings-service/restaurantInfo.csv' DELIMITERS ',' CSV HEADER;", (err, res) => {
    if (err) {
      console.log(err)
    } else {
      console.log('query completed', res)
    }
  })
}

dataGen();