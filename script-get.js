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
  let url = `http://localhost:3000/api/restaurants/${id}/bookings/:bookingId`;

  http.get(url);
  sleep(0.3);
}