const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
let writer = csvWriter();


const dataGen = async () => {
  const createReservationsTable = async () => {
    writer.pipe(fs.createWriteStream('cassReservations.csv'));
    for (let i = 0; i < 10000000; i++) {
      writer.write({
        id: i + 1,
        timeSlotId: Math.ceil(Math.random()*5250000),
        partySize: Math.ceil(Math.random()*10),
        name: faker.name.findName(),
        phone: faker.phone.phoneNumberFormat()
      });
    }
    writer.end();
    console.log('generated reservations csv');
  }
  await createReservationsTable();
}

dataGen();