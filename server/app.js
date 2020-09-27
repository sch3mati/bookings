const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database');
const calculateReservations = require('./calculateReservations');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../public')));

app.post('/api/bookings/:restaurantId', (req, res) => {
  const reservation = req.query;
  reservation.restaurantId = req.params.restaurantId;
  db.addReservation(reservation, (err) => {
    if (err) {
      res.status(400).send('could not reserve');
    } else {
      res.status(200).send('reservation made');
    }
  });
});

app.get('/api/bookings/:restaurantId', (req, res) => {
  const reservation = req.query;
  reservation.restaurantId = req.params.restaurantId;
  console.log(reservation);
  db.getReservations(reservation, (err, reservationData, restaurantData) => {
    if (err) {
      res.status(400).send('error finding reservations');
    } else {
      res.status(200).send(calculateReservations(reservationData, restaurantData, reservation));
    }
  });
});

module.exports = app;