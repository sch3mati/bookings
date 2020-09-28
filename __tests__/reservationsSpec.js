const calculateReservations = require('../server/calculateReservations');

describe('Test reservation calculation', () => {
  const reservationData = [
    { partySize: 1, date: 1601490600000 },
    { partySize: 8, date: 1601483400000 },
    { partySize: 10, date: 1601478000000 },
    { partySize: 5, date: 1601494200000 },
    { partySize: 2, date: 1601478000000 },
    { partySize: 5, date: 1601485200000 },
    { partySize: 8, date: 1601487000000 },
    { partySize: 3, date: 1601494200000 },
    { partySize: 1, date: 1601496000000 },
    { partySize: 5, date: 1601479800000 },
    { partySize: 9, date: 1601488800000 },
    { partySize: 9, date: 1601479800000 },
    { partySize: 10, date: 1601481600000 },
    { partySize: 7, date: 1601494200000 },
    { partySize: 2, date: 1601483400000 },
    { partySize: 10, date: 1601481600000 }
  ];
  const restaurantData = [ { seatCapacity: 16 } ];
  const reservation = {
    date: 'September 30, 2020 10:30:00',
    partySize: '10',
    restaurantId: '80'
  };
  const result = [
    'Wed Sep 30 2020 09:30:00 GMT-0700 (Pacific Daylight Time)',
    'Wed Sep 30 2020 10:00:00 GMT-0700 (Pacific Daylight Time)',
    'Wed Sep 30 2020 10:30:00 GMT-0700 (Pacific Daylight Time)',
    'Wed Sep 30 2020 11:00:00 GMT-0700 (Pacific Daylight Time)',
    'Wed Sep 30 2020 11:30:00 GMT-0700 (Pacific Daylight Time)',
    'Wed Sep 30 2020 13:00:00 GMT-0700 (Pacific Daylight Time)'
  ];
  test('Should not return undefined', () => {
    expect(calculateReservations(reservationData, restaurantData, reservation)).toBeDefined();
  });
  test('Should return array', () => {
    expect(Array.isArray(calculateReservations(reservationData, restaurantData, reservation))).toEqual(true);
  });
  test('Should return correct results', () => {
    expect(calculateReservations(reservationData, restaurantData, reservation)).toEqual(result);
  });
});