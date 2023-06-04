-- Exercise 1: Items and Customers
--Database: public

-- DROP DATABASE IF EXISTS public;

CREATE DATABASE public
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
--addition of two tables: items and customers
CREATE TABLE IF NOT EXISTS items (
	id SERIAL PRIMARY KEY,
	name VARCHAR(50)NOT NULL,
	price INT NOT NULL
);
--add the items into the items table
INSERT INTO  items (name, price)
VALUES ('Small Desk', 100),
		('Large desk', 300),
		('Fan', 80);

CREATE TABLE IF NOT EXISTS customers(
	id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL
);
--add 5 new customers to the customers table
INSERT INTO customers (first_name, last_name)
VALUES ('Greg', 'Jones'),
		('Sandra', 'Jones'),
		('Scott', 'Scott'),
		('Trevor', 'Green'),
		('Melanie', 'Johnson');

SELECT * FROM customers;
--Use SQL to fetch the following data from database:
--All the items
SELECT * FROM items;
--All the items with a price above 80(80 not included)

SELECT * FROM items WHERE price>80;

-- All the items with a price below 300(300 included)

SELECT * FROM items WHERE price<= 300;

-- All customers whose last name is ‘Smith’ (What will be your outcome?).
SELECT * FROM customers WHERE last_name='Smith';
--There are no customers with 'Smith' as a last_name

-- All customers whose last name is ‘Jones’.
SELECT * FROM customers WHERE last_name='Jones';

-- All customers whose firstname is not ‘Scott’.
SELECT * FROM customers WHERE first_name!='Scott';

