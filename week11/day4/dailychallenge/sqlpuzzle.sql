-- DAILYCHALLENGE-SQL Puzzle

--Database: sql_Puzzle

-- DROP DATABASE IF EXISTS "sql_Puzzle";

CREATE DATABASE "sql_Puzzle"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United States.1252'
    LC_CTYPE = 'English_United States.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;
	
CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)
--QUERIES
INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')
--it works because id is not flag as NOT NULL

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


--DATA

SELECT * FROM SecondTab
--Q1. What will be the OUTPUT of the following statement?
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
--It will display the number of rows in the table 'FirstTab' where the id does not exist in SecondTab and is not 'NULL'

--Q2. What will be the OUTPUT of the following statement?
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

--It will display the number of rows in the table 'FirstTab' where the id does not exist in SecondTab and is equal to 5


--Q3. What will be the OUTPUT of the following statement?
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )

--It will display the number of rows in the table: FirstTab where the id does not exist in the secondTab 

--Q4. What will be the OUTPUT of the following statement?
SELECT COUNT(*) 
FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

--It will display the number of rows in the table: FirstTab where the id does not exist in the secondTab and is NULL














