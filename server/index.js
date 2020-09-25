const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database')

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../public')));

app.post('/api/bookings/1', (req, res) => {
  const reservation = req.query;
  console.log(reservation);
  db.addReservation(1, reservation.name, reservation.contactInfo, reservation.size, Date.parse(reservation.date));
  res.send('received');
});

app.listen(port, () => {
  console.log(`Listeing at localhost:${port}`);
});