const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
let writer = csvWriter();


const dataGen = async () => {
  const createReservationsTable = async () => {
    writer.pipe(fs.createWriteStream('reservations.csv'));
    for (let i = 0; i < 30000000; i++) {
      if ( i === 1000000 || i === 5000000 || i === 10000000 || i === 20000000 || i === 25000000) {
        console.log(`seeded ${i} data`)
      }
      writer.write({
        id: i + 1,
        timeSlotId: Math.ceil(Math.random()*21000000),
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