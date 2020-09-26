const calculateReservations = (reservationData, restaurantData, partySize) => {
  const seatCapacity = restaurantData[0].seatCapacity;

  //create array to store total seats taken for each time increment
  //map through reservationData
  //  add the partySize for each reservation to the reference array
  //map through reference array, calculate which time increments have enough space
  //  remove time increments that are full
  //return final array of available time slots
}