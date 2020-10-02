// dbseeder.js
const faker = require('faker');
const db = require('./index.js');

const daysOfReservations = 10;
const numberOfRestaurants = 100;
const reservationsPerDay = 100;

const restaurantEnding = ['Cafe', 'Restaurant', 'Steak House', 'Pizza House', 'Diner', 'Eatery', 'Joint', 'Canteen', 'BBQ', 'Chophouse', 'Bar', 'Bistro', 'Sandwiches'];

for (let restaurant = 0; restaurant < numberOfRestaurants; restaurant++) {
  const name = `${faker.name.firstName()}'s ${restaurantEnding[Math.floor(Math.random() * 13)]}`;
  const seatCapacity = faker.random.number({min: 12, max: 25});
  db.addRestaurant(name, seatCapacity);
}

for (let restaurant = 1; restaurant <= numberOfRestaurants; restaurant++) {
  for (let reservation = 1; reservation <= reservationsPerDay * daysOfReservations; reservation++) {
    const partySize = faker.random.number({min: 1, max: 10});
    const date = faker.date.soon(daysOfReservations);
    const name = faker.name.findName();
    const contactInfo = faker.phone.phoneNumber();
    data = {
      restaurantId: restaurant,
      name: name,
      contactInfo: contactInfo,
      partySize: partySize,
      date: date.toString()
    };
    db.addReservation(data, (err) => {
      if (err) {
        console.log('seeding failed');
      }
    });
  }
}

