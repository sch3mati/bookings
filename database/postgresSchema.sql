drop database if exists Bookings;

create database Bookings;

\c bookings;

create table if not exists restaurants (
  id serial primary key,
  seatCapacity int not null,
  name varchar(255) not null
);

create table if not exists reservations (
  id serial primary key,
  restaurantId int references restaurants (id) not null,
  partySize int not null,
  name varchar(255) not null,
  date bigint not null,
  contactInfo varchar(255) not null,
  occasion varchar(255) null
)

-- psql postgres < postgresSchema.sql
