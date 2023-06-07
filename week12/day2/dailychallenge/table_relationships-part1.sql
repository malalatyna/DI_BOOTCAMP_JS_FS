-- Database: DailyChallenge
--Daily challenge Week 12- day 2
-- DROP DATABASE IF EXISTS "DailyChallenge";
-- Tables Relationships
CREATE DATABASE "DailyChallenge"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

--PART 1
CREATE TABLE customer(
	customer_id SERIAL PRIMARY KEY,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL
);
CREATE TABLE customer_profile(
	profile_id SERIAL PRIMARY KEY,
	isLoggedIn BOOLEAN DEFAULT false,
	customer_id INTEGER,
	FOREIGN KEY (customer_id) REFERENCES customer (customer_id)
);
-- Insert values into customers
INSERT INTO customer(first_name, last_name)
VALUES ('John', 'Doe'),
		('Jerome', 'Lalu'),
		('Lea', 'Rive');
-- 	Insert values into customer profiles, using subqueries	
INSERT INTO customer_profile(isLoggedIn, customer_id)
VALUES 
(true, (SELECT customer_id FROM customer WHERE first_name = 'John')),
(false, (SELECT customer_id FROM customer WHERE first_name = 'Jerome'));
	
--Use the relevant types of Joins to display:
-- The first_name of the LoggedIn customers
SELECT first_name 
FROM customer as c
INNER JOIN customer_profile as cp
ON c.customer_id = cp.customer_id 
WHERE cp.isLoggedIn ='true';

-- All the customers first_name and isLoggedIn columns 
-- even the customers those who don’t have a profile.

SELECT c.first_name, COALESCE(cp.isloggedIn, false) 
FROM customer as c
LEFT JOIN customer_profile as cp
ON c.customer_id = cp.customer_id;

--The number of customers that are not LoggedIn

SELECT COUNT(*) 
FROM customer AS c 
LEFT JOIN customer_profile as cp ON c.customer_id = cp.customer_id 
WHERE cp.isLoggedIn='false' OR cp.isLoggedIn IS NULL;







