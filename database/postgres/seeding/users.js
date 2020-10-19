const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
let writer = csvWriter();


const dataGen = async () => {
  const createUsersTable = async () => {
    writer.pipe(fs.createWriteStream('users.csv'));
    for (let i = 0; i < 5000000; i++) {
      writer.write({
        id: i + 1,
        username: faker.internet.userName(),
        name: faker.name.findName(),
        reservationsId: Math.ceil(Math.random()*30000000),
        phone: faker.phone.phoneNumberFormat(),
        email: faker.internet.email(),
      });
    }
    writer.end();
    console.log('generated users csv');
  }
  await createUsersTable();
}

dataGen();


