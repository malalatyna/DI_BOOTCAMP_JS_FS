
CREATE TABLE IF NOT EXISTS actors(
  actor_id SERIAL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  age DATE NOT NULL,
  number_oscars SMALLINT NOT NULL
);

INSERT INTO actors(first_name, last_name, age, number_oscars)
VALUES ('Matt', 'Damon', '1970-10-08', 5);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('George', 'Clooney', '1961-05-06', 2);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('Jennifer', 'Lopez', '1969-01-08', 1);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('Kate', 'Holmes', '1980-03-01', 4);

INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES
    ('Tom', 'Hanks','1956-07-09', 3),
    ('Meryl', 'Streep','1949-06-22', 4) ,
	('Leonardo', 'Dicaprio','1974-11-11', 6);
SELECT first_name, last_name FROM actors WHERE first_name ='Matt' OR number_oscars =2;
SELECT * FROM actors

--count how many actors are in the table

SELECT COUNT (*) FROM actors;
--Try to add a new actor with some blank fields. 
--What do you think the outcome will be ?

--if I try to insert a new actor with blank fields in any of these columns, 
--the outcome will display an error indicating a violation of the NOT NULL constraint.
