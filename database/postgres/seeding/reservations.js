const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
let writer = csvWriter();


const dataGen = async () => {
  const createReservationsTable = async () => {
    writer.pipe(fs.createWriteStream('reservations.csv'));
    for (let i = 0; i < 10000000; i++) {
      writer.write({
        id: i + 1,
        restaurantId: Math.ceil(Math.random()*250000),
        partySize: Math.ceil(Math.random()*10),
        name: faker.name.findName(),
        dateAndTime: faker.date.soon(90),
        phone: faker.phone.phoneNumberFormat(),
        timeSlots: Math.floor(Math.random()*5250000)
      });
    }
    writer.end();
    console.log('generated reservations csv');
  }
  await createReservationsTable();
  // db.query("COPY reservations (id, seatCapacity, name) FROM '/Users/victoriachen/Desktop/SDC-project/bookings-service/reservations.csv' DELIMITERS ',' CSV HEADER;", (err, res) => {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log('reservations query completed', res)
  //   }
  // })
}

dataGen();