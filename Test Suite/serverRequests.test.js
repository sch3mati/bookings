const db = require('../database');
const app = require('../server/app');
const supertest = require('supertest');
const request = supertest(app);
const mysql = require('mysql');
const mysqlConfig = require('./config.js');

//test POST request
describe('Test responses for /api/bookings/:restaurantId', () => {

  test('Response to POST request', () => {
    const data = {
      date: 'September 20, 2020 20:20:20',
      size: 5,
      name: 'Johnny',
      contactInfo: '1234567890'
    };
    return request
      .post('/api/bookings/1')
      .send(data)
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });
});