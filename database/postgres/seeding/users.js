const fs = require('fs');
const csvWriter = require('csv-write-stream');
const faker = require('faker');
let writer = csvWriter();


const dataGen = async () => {
  const createUsersTable = async () => {
    writer.pipe(fs.createWriteStream('users.csv'));
    for (let i = 0; i < 1000000; i++) {
      writer.write({
        id: i + 1,
        username: faker.internet.userName(),
        name: faker.name.findName(),
        reservationsId: Math.ceil(Math.random()*10000000),
        phone: faker.phone.phoneNumberFormat(),
        email: faker.internet.email(),
      });
    }
    writer.end();
    console.log('generated users csv');
  }
  await createUsersTable();
  // db.query("COPY users (username, name, reservationsIds, phone, email) FROM '/Users/victoriachen/Desktop/SDC-project/bookings-service/users.csv' DELIMITERS ',' CSV HEADER;", (err, res) => {
  //   if (err) {
  //     console.log(err)
  //   } else {
  //     console.log('users query completed', res)
  //   }
  // })
}

dataGen();


