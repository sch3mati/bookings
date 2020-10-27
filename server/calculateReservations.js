const calculateReservations = (reservationData, restaurantData, reservation) => {
  const seatCapacity = restaurantData[0].seatcapacity;
  const seatsTaken = new Object;
  const availabilities = new Array;
  const timeRange = 2.5 * 60 * 60 * 1000;
  const timeIncrement = 30 * 60 * 1000;

  //loop through reservationData and check if data is there
  //if data not there, means available to book
  let reservationDataAval = [];
  reservationData.map((reser) => {
    if ((Date.parse(reservation.date) <= (Date.parse(reser.date) + timeRange)) && (Date.parse(reservation.date) >= (Date.parse(reser.date) - timeRange)) ) {
      reservationDataAval.push(reser);
    }
  });

  reservationDataAval.map((reservation) => {
    if (!seatsTaken[reservation.date]) {
      seatsTaken[reservation.date] = reservation.partySize;
    } else {
      seatsTaken[reservation.date] += reservation.partySize;
    }
  });


  /// code added above this and below comment on top

  // reservationData.map((reservation) => {
  //   if (!seatsTaken[reservation.date]) {
  //     seatsTaken[reservation.date] = reservation.partySize;
  //   } else {
  //     seatsTaken[reservation.date] += reservation.partySize;
  //   }
  // });

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

