const calculateReservations = (reservationData, restaurantData, reservation) => {
  const seatCapacity = restaurantData[0].seatCapacity;
  const seatsTaken = new Object;
  const availabilities = new Array;
  const timeRange = 2.5 * 60 * 60 * 1000;
  const timeIncrement = 30 * 60 * 1000;

  reservationData.map((reservation) => {
    if (!seatsTaken[reservation.date]) {
      seatsTaken[reservation.date] = reservation.partySize;
    } else {
      seatsTaken[reservation.date] += reservation.partySize;
    }
  });

  for (let time = Date.parse(reservation.date) - timeRange; time <= (Date.parse(reservation.date) + timeRange); time += timeIncrement) {
    if (!seatsTaken[time]) {
      seatsTaken[time] = 0;
    }
    if (seatsTaken[time] + Number(reservation.partySize) <= seatCapacity) {
      availabilities.push(new Date(time).toString());
    }
  }
  return availabilities;
};

module.exports = calculateReservations;

