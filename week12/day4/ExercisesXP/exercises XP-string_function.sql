-- EXERCISES XP
--WEEK 12_ day4
-- STRING FUNCTION
-- Q1. Write a query to update phone_number records. 
-- If the the substring ‘124’ was found in that column, update the phone_number to ‘999’.
UPDATE employees 
SET phone_number = 999 
WHERE phone_number ILIKE '%124%';

-- Q2. Write a query to find the details of the employees who contain eight or more characters in their first name.

SELECT * FROM employees
WHERE LENGTH(first_name)>=8; 

--Q3. Write a query to join in uppercase, the first letter of the first_name, with the last_name, 
-- with '@example.com‘ in the email column.

SELECT CONCAT(LEFT(first_name,1),UPPER(last_name), '@example.com') AS EMAIL
FROM employees;

-- Q4. Write a query to get the employee id, email but discard the last three characters of the email
SELECT employee_id, SUBSTRING(email, 1, LENGTH(email) - 3) AS EMAIL_discard_characters
FROM employees;

-- Q5. Write a query to display the first word in the job title, 
-- if the job title contains more than one words.

SELECT job_title, SUBSTRING(job_title,1, POSITION(' ' IN job_title)) 
FROM jobs;

-- Q6. Write a query that displays the first name and the length of the first name for all employees 
-- whose name starts with the letters ‘A’, ‘J’ or ‘M’. 
-- Give each column an appropriate label.
-- Sort the results by the employees’ first names.
SELECT first_name AS "First Name", LENGTH(first_name) AS "Length of the name"  
FROM employees
WHERE 
	LEFT(first_name,1)='A' 
	OR LEFT(first_name,1)='J' 
	OR LEFT(first_name,1)='M'
ORDER BY first_name;

-- Q7. Write a query to display the first name and salary for all employees.
-- Display the salary with the $ symbol. Label the column as SALARY.

SELECT first_name, CONCAT('$', salary) AS SALARY 
FROM employees



