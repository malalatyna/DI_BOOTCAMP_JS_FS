--MINIPROJECT- week 11-day 5
--Restricting And Sorting
-- Q1.Write a query to display the first_name, last_name and salary of all employees whose salary is between $10,000 and $15,000.
SELECT first_name, last_name, salary FROM employees WHERE salary between 10000 and 15000;

-- Q2. Write a query to display the first_name, last_name and hire date of all employees who were hired in 1987.
SELECT first_name, last_name, hire_date FROM employees
WHERE hire_date BETWEEN '1987-01-01' AND '1987-12-31';

-- Q3. Write a query to get the all employees whose first_name has both the letters ‘c’ and ‘e’.
SELECT * FROM employees WHERE first_name LIKE '%c%e%';

--Q4. Write a query to display the last_name, job, and salary of all the employees who don’t work as Programmers or Shipping Clerks, and who don’t receive a salary equal to $4,500, $10,000, or $15,000.
SELECT employees.last_name, jobs.job_title, employees.salary
FROM employees
JOIN jobs ON employees.job_id = jobs.job_id
WHERE jobs.job_title NOT IN ('Programmer', 'Shipping Clerk')
AND employees.salary NOT IN (4500, 10000, 15000);

--Q5 Write a query to display the last names of all employees whose last name contains exactly six characters.	
SELECT last_name FROM employees WHERE LENGTH(last_name)=6;

--Q6. Write a query to display the last name of all employees who have the letter ‘e’ as the third character in the name.
SELECT last_name FROM employees WHERE SUBSTRING(last_name, 3, 1) ='e';

--Q7. Write a query to display the jobs title appearing in the employees table.

SELECT jobs.job_title FROM employees INNER JOIN jobs ON employees.job_id = jobs.job_id ;

--Q8. Write a query to select all information of employees whose last name is either ‘JONES’ or ‘BLAKE’ or ‘SCOTT’ or ‘KING’ or ‘FORD’.
SELECT * FROM employees WHERE last_name in ('Jones','Blake','Scott', 'King', 'Ford');

