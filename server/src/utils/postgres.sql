DROP DATABASE IF EXISTS contacts;

CREATE DATABASE contacts;

CREATE TABLE contacts(
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50),
  phone VARCHAR(50)
)