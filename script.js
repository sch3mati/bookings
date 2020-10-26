import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  stages: [
    {duration: '30s', target: 200},
    {duration: '1m', target: 500},
    {duration: '1m', target: 1000},
    {duration: '1m', target: 500},
    {duration: '30s', target: 200}
  ],
};
export default function () {

  let id = Math.ceil(Math.random() * 1000000);
  let url = `http://localhost:3000/api/restaurants/${id}/bookings`;
  // let url = `http://localhost:3000/api/restaurants/${id}/bookings/:bookingId`;
  let month = ['January', 'March', 'February'];

  http.post(url, {
    "date": `${month[Math.floor(Math.random() * 3)]} ${Math.ceil(Math.random() * 31)}, 2021 ${Math.ceil(Math.random() * 12)}:00 AM`,
    "partySize": Math.ceil(Math.random() * 5),
    "name": "chicken little",
    "contactInfo": "222-323-1212",
    "occasion" : "",
    "restaurantId": id
  });
  sleep(0.3);
}