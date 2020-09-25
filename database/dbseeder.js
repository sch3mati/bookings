// dbseeder.js
const faker = require('faker');
const db = require('./index.js');

const daysOfReservations = 7;
const numberOfRestaurants = 100;
const reservationsPerDay = 100;

for (let restaurant = 0; restaurant < numberOfRestaurants; restaurant++) {
  const name = faker.commerce.productName();
  const seatCapacity = faker.random.number({min: 40, max: 80});
  db.addRestaurant(name, seatCapacity);
}

for (let restaurant = 1; restaurant <= numberOfRestaurants; restaurant++) {
  for (let reservation = 1; reservation <= reservationsPerDay * daysOfReservations; reservation++) {
    const partySize = faker.random.number({min: 1, max: 10});
    const date = faker.date.future(7);
    const name = faker.name.findName();
    const contactInfo = faker.phone.phoneNumber();
    db.addReservation(restaurant, name, contactInfo, partySize, date.getTime());
  }
}

