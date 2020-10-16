drop database if exists Bookings;

create database Bookings;

\c bookings;

create table if not exists restaurants (
  id serial primary key,
  seatCapacity int not null,
  name varchar(255) not null
);

create table if not exists timeSlots (
  id serial primary key,
  date bigint not null,
  time time not null,
  seatCapacity int not null,
  -- booked boolean not null,
)

create table if not exists reservations (
  id serial primary key,
  restaurantId int references restaurants (id) not null,
  partySize int not null,
  name varchar(255) not null,
  dateAndTime bigint not null,
  phone varchar(255) not null,
  occasion varchar(255) null,
  timeSlot int references timeSlots (id) not null
)

create table if not exists users (
  id serial primary key,
  username varchar(255)  not null,
  name varchar(255) not null,
  reservationIds int references reservations (id),
  phone varchar(255) not null,
  email varchar(255) not null
)


-- psql postgres < postgresSchema.sql
