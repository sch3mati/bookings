DROP KEYSPACE IF EXISTS bookings;
CREATE KEYSPACE bookings WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 1 };

use bookings;

CREATE TABLE restaurants (
  id uuid,
  seatCapacity int,
  name varchar,
  PRIMARY KEY (id)
);

CREATE TABLE reservations_by_restaurant (
  id uuid,
  restaurantId int,
  partySize int,
  name varchar,
  date bigint,
  contactInfo varchar,
  occasion varchar,
  PRIMARY KEY (restaurantId, id)
);

//source 'cassandraSchema.cql'
