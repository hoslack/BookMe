BEGIN;

DROP TABLE IF EXISTS users, books CASCADE;


CREATE TABLE users(
	id SERIAL PRIMARY KEY NOT NULL,
	firstname TEXT NOT NULL,
	lastname TEXT NOT NULL,
	email TEXT NOT NULL,
	phone TEXT NOT NULL,
	estate TEXT NOT NULL
);

CREATE TABLE books(
	id SERIAL PRIMARY KEY NOT NULL,
	name TEXT NOT NULL,
	description TEXT NULL,
	picture TEXT NULL, 
	userid INTEGER REFERENCES users(id)
);

INSERT INTO users(firstname,lastname,email,phone,estate) 
VALUES('hoslack','ochieng','hos@hmail.com','0723255128', 'Huruma');
INSERT INTO books(name, description, userid) VALUES('Oliver Twist', 'The best',1);

COMMIT;