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
  seatCapacity int not null,
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

COPY restaurants FROM '/Users/victoriachen/Desktop/SDC-project/bookings-service/restaurantInfo.csv' CSV header;

COPY timeSlots FROM '/Users/victoriachen/Desktop/SDC-project/bookings-service/timeSlots.csv' CSV header;

COPY reservations FROM '/Users/victoriachen/Desktop/SDC-project/bookings-service/reservations.csv' CSV header;

COPY users FROM '/Users/victoriachen/Desktop/SDC-project/bookings-service/users.csv' CSV header;


-- psql postgres < postgresSchema.sql


