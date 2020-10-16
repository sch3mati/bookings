DROP KEYSPACE IF EXISTS bookings;
CREATE KEYSPACE bookings WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

use bookings;

CREATE TABLE restaurants_by_id (
  id uuid,
  seatCapacity int,
  name varchar,
  PRIMARY KEY (id)
);

CREATE TABLE reservations_by_timeSlot (
  id uuid,
  timeSlot int,
  partySize int,
  name varchar,
  phone varchar,
  occasion varchar,
  PRIMARY KEY (timeSlot)
  //removed dateAndTime bigint
);

CREATE TABLE users (
  id uuid,
  reservationIds int,
  username varchar,
  name varchar,
  phone varchar,
  email varchar,
  PRIMARY KEY (id)
)

CREATE TABLE time_slots_restaurantId (
  id uuid,
  restaurantId int,
  date bigint,
  time time,
  seatCapacity int,
  // booked boolean,
  PRIMARY KEY (restaurantId, (date, time))
)


//source 'cassandraSchema.cql'
