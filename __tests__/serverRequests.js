const app = require('../server/app');
const supertest = require('supertest');
const request = supertest(app);
const mysql = require('mysql');
const mysqlConfig = require('../database/config.js');

const dbConnection = mysql.createConnection(mysqlConfig);

describe('Test responses for localhost:3000/ endpoints', () => {

  test('Server response for GET request to "/"', () => {
    return request
      .get('/')
      .then(response => {
        expect(response.statusCode).not.toBe(404);
      });
  });

  test(`Handles GET request to localhost:3000/api/bookings/${Math.floor(Math.random() * 100)}`, () => {
    return request
      .get('/api/bookings/28')
      .then(response => {
        expect(response.statusCode).not.toBe(404);
      });
  });

  test(`Handles for POST request to localhost:3000/api/bookings/${Math.floor(Math.random() * 100)}`, () => {
    return request
      .post('/api/bookings/28')
      .then(response => {
        expect(response.statusCode).not.toBe(404);
      });
  });

});