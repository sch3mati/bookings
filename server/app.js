const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database/postgres');
const calculateReservations = require('./calculateReservations');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/:restaurantId', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.get('/api/bookings/restaurantName/:restaurantId', (req, res) => {
  const restaurantId = req.query.restaurantId;
  db.getRestaurantName(restaurantId, (err, data) => {
    if (err) {
      res.status(400).send('could not get restaurant name');
    } else {
      res.status(200).send(data);
    }
  });
});

app.post('/api/bookings/:restaurantId', (req, res) => {
  const reservation = req.body;
  reservation.restaurantId = req.params.restaurantId;
  console.log(reservation);
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
  console.log(reservation)
  reservation.restaurantId = req.params.restaurantId;
  db.getReservations(reservation, (err, reservationData, restaurantData) => {
    if (err) {
      res.status(400).send('error finding reservations');
    } else {
      console.log('res', reservationData)
      console.log('restar', restaurantData)
      res.status(200).send(calculateReservations(reservationData, restaurantData, reservation));
    }
  });
});

module.exports = app;