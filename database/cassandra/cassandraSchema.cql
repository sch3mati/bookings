DROP KEYSPACE IF EXISTS bookings;
CREATE KEYSPACE bookings WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

USE bookings;

CREATE TABLE restaurants_by_id (
  id int,
  seatCapacity int,
  name varchar,
  PRIMARY KEY (id)
);

CREATE TABLE reservations_by_timeSlot (
  id int,
  timeSlotId int,
  partySize int,
  name varchar,
  phone varchar,
  PRIMARY KEY (timeSlotId)
);

CREATE TABLE users (
  id int,
  username varchar,
  name varchar,
  reservationId int,
  phone varchar,
  email varchar,
  PRIMARY KEY (id)
);

CREATE TABLE time_slots_by_restaurantId (
  restaurantId int,
  id int,
  date varchar,
  time time,
  seatCapacity int,
  PRIMARY KEY (restaurantId, date, time)
);

COPY restaurants_by_id (id, seatCapacity, name) FROM '/Users/victoriachen/Desktop/SDC-project/bookings-service/cassRestaurants.csv' WITH DELIMITER=',' AND HEADER=TRUE;

COPY time_slots_by_restaurantId (restaurantId, id, date, time, seatCapacity) FROM '/Users/victoriachen/Desktop/SDC-project/bookings-service/cassTimeSlots.csv' WITH DELIMITER=',' AND HEADER=TRUE;

COPY reservations_by_timeSlot (id, timeSlotId, partySize, name, phone) FROM '/Users/victoriachen/Desktop/SDC-project/bookings-service/cassReservations.csv' WITH DELIMITER=',' AND HEADER=TRUE;

COPY users (id, username, name, reservationId, phone, email) FROM '/Users/victoriachen/Desktop/SDC-project/bookings-service/users.csv' WITH DELIMITER=',' AND HEADER=TRUE;


-- source 'cassandraSchema.cql'

