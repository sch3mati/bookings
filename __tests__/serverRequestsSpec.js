const app = require('../server/app');
const supertest = require('supertest');
const request = supertest(app);

describe('Test responses for localhost:3000/ endpoints', () => {

  test('Server response for GET request to "/"', () => {
    return request
      .get('/')
      .then(response => {
        expect(response.statusCode).toBe(200);
      });
  });

  test('Handles GET request to localhost:3000/api/bookings/{1-100}', (done) => {
    return request
      .get(`/api/bookings/${Math.floor(Math.random() * 100)}`)
      .query({ date: 'September 30, 2020 10:30:00', partySize: '10' })
      .expect(200).end(done);
  });

  test('Handles for POST request to localhost:3000/api/bookings/{1-100}', (done) => {
    return request
      .post(`/api/bookings/${Math.floor(Math.random() * 100)}`)
      .send({
        date: 'September 30, 2020 10:30:00',
        partySize: '10',
        name: 'Johnny tang',
        contactInfo: '2222222'
      })
      .expect(200).end(done);
  });

});