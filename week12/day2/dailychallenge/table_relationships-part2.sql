
--Dailychallenge: Tables Relationships
--PART 2
-- Q1.Create a table named Book
CREATE TABLE book(
	book_id SERIAL PRIMARY KEY,
	title VARCHAR(50) NOT NULL,
	author VARCHAR(50) NOT NULL
);
--Q2. Insert values into books
INSERT INTO book(title, author)
VALUES ('Alice In Wonderland', 'Lewis Carroll'),
		('Harry Potter', 'J.K Rowling'),
		('To kill a mockingbird', 'Harper Lee');
		
--Q3.Create a table named student
CREATE TABLE student(
	student_id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL UNIQUE,
	age INTEGER NOT NULL CHECK (age > 0 AND age < 15) 
);
-- Q4. Insert values into students
INSERT INTO student(name, age)
VALUES ('John', 12),
		('Lera', 11),
		('Patrick', 10),
		('Bob', 14);
-- Q5.Create a table named Library, with the columns  
CREATE TABLE library(
	book_fk_id INTEGER NOT NULL,
	student_id INTEGER NOT NULL,
	borrowed_date DATE NOT NULL,
	PRIMARY KEY(book_fk_id,student_id),
	FOREIGN KEY (book_fk_id) REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (student_id)REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE
);
--Q6. Add 4 records in the junction table, use subqueries
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
INSERT INTO Library (book_fk_id, student_id, borrowed_date)
VALUES (
    (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
	(SELECT student_id FROM student WHERE name='John'),
    '2022-02-15'
);
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
INSERT INTO Library (book_fk_id, student_id, borrowed_date)
VALUES (
    (SELECT book_id FROM book WHERE title = 'To kill a mockingbird'),
	(SELECT student_id FROM student WHERE name='Bob'),
    '2021-03-03'
);
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
INSERT INTO Library (book_fk_id, student_id, borrowed_date)
VALUES (
    (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
	(SELECT student_id FROM student WHERE name='Lera'),
    '2021-05-23'
);	
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021
INSERT INTO Library (book_fk_id, student_id, borrowed_date)
VALUES (
    (SELECT book_id FROM book WHERE title = 'Harry Potter'),
	(SELECT student_id FROM student WHERE name='Bob'),
    '2021-08-12'
);
--Q7. Display the data
-- Select all the columns from the junction table
SELECT * FROM library; 
-- Select the name of the student and the title of the borrowed books
SELECT s.name, b.title
FROM library AS l
JOIN student AS s ON l.student_id = s.student_id
JOIN book AS b ON l.book_fk_id = b.book_id;

-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT AVG(s.age) AS average_age
FROM library AS l
JOIN student AS s ON l.student_id = s.student_id
JOIN book AS b ON l.book_fk_id = b.book_id
WHERE LOWER(b.title) = LOWER('Alice in Wonderland');
-- Delete a student from the Student table, what happened in the junction table ?

DELETE FROM student
WHERE student_id = 1;

-- With the "ON DELETE CASCADE" option, when a student is deleted from the "Student" table,
-- all related records in the "Library" table that have a matching "student_id" will be automatically deleted as well. 



