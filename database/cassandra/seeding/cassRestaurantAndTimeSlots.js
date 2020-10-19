const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
let writer = csvWriter();
let writer2 = csvWriter();

let timeSlotId = 1;

const restaurantEnding = ['Cafe', 'Restaurant', 'Steak House', 'Pizza House', 'Diner', 'Eatery', 'Joint', 'Canteen', 'BBQ', 'Chophouse', 'Bar', 'Bistro', 'Sandwiches'];
let seatCapacities = [];

const dataGen = async () => {
  const createRestaurantTable = async () => {
    writer.pipe(fs.createWriteStream('cassRestaurants.csv'));
    for (let i = 0; i < 1000000; i++) {
      let cap = faker.random.number({min:12, max: 50})
      seatCapacities.push(cap);
      writer.write({
        id: i + 1,
        seatCapacity: cap,
        name: `${faker.name.firstName()}'s ${restaurantEnding[Math.floor(Math.random() * 13)]}`,
      });
    }
    writer.end();
    console.log('generated restaurant csv');

  }
  await createRestaurantTable();
}

dataGen();

let minutes;
let hours = 10;

const dataGenForTime = async () => {
  const createTimeSlotTable = async () => {
    writer2.pipe(fs.createWriteStream('cassTimeSlots.csv'));
    for (let i = 0; i < 1000000; i++) {
      if ( i === 100000 || i === 250000 || i === 500000 || i === 750000) {
        console.log(`seeded ${i} data`)
      }
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
        let date = faker.date.soon(90);
        writer2.write({
          restaurantId: i + 1,
          id: timeSlotId,
          date: date.toString().slice(4,15),
          time: `${hours}:${minutes}:00`,
          seatCapacity: faker.random.number({min:12, max: seatCapacities[i]}),
        });
        timeSlotId++;
      }
    }

    writer2.end();
    console.log('generated time slot csv');
  }
  await createTimeSlotTable();
}

dataGenForTime();

