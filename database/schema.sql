drop database if exists FEC_Bookings;

create database FEC_Bookings;

use FEC_Bookings;

create table restaurants (
  id int not null auto_increment primary key,
  seatCapacity int not null,
  name varchar(255) not null
);

create table reservations (
  id int not null auto_increment primary key,
  restaurantId int not null,
  partySize int not null,
  name varchar(255) not null,
  date bigint not null,
  contactInfo varchar(255) not null,
  occasion varchar(255) null
);

-- mysql -u root -p < database/schema.sql