drop database if exists bookings;

create database bookings;

\c bookings;

create table if not exists restaurants (
  id serial primary key,
  seatCapacity int not null,
  name varchar(50) not null
);

create table if not exists timeSlots (
  id serial primary key,
  date text not null,
  time time not null,
  restaurantId int references restaurants (id) not null
);

create table if not exists reservations (
  id serial primary key,
  timeSlotId int references timeSlots (id) not null,
  partySize int not null,
  name varchar(50) not null,
  phone varchar(50) not null
);

create table if not exists users (
  id serial primary key,
  username varchar(50) not null,
  name varchar(50) not null,
  reservationId int references reservations (id),
  phone varchar(50) not null,
  email varchar(50) not null
);

COPY restaurants (seatCapacity, name) FROM '/Users/victoriachen/Desktop/SDC-project/bookings-service/restaurantInfo.csv' DELIMITERS ',' CSV header;

COPY timeSlots (date, time, restaurantId) FROM '/Users/victoriachen/Desktop/SDC-project/bookings-service/timeSlots.csv' DELIMITERS ',' CSV header;

COPY reservations (timeSlotId, partySize, name, phone) FROM '/Users/victoriachen/Desktop/SDC-project/bookings-service/reservations.csv' DELIMITERS ',' CSV header;

COPY users (username, name, reservationId, phone, email) FROM '/Users/victoriachen/Desktop/SDC-project/bookings-service/users.csv' DELIMITERS ',' CSV header;


-- psql postgres < postgresSchema.sql


