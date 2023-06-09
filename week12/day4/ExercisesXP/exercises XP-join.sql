-- EXERCISES XP
--WEEK 12_ day4
-- JOINS
-- Q1. Write a query to find the addresses (location_id, street_address, city, state_province, country_name) of all the departments.
SELECT l.location_id, l.street_address, l.city,l.state_province,c.country_name
FROM locations AS l
LEFT JOIN countries AS c ON l.country_id=c.country_id;

-- Q2.Write a query to make a join with the employees and departments table
-- to find the name of the employee, including first_name and last name, department ID and name of departments.

SELECT e.first_name, e.last_name, d.department_id,d.department_name
FROM employees AS e
INNER JOIN departments AS d ON e.department_id=d.department_id; 

--Q3.Write a SQL query to make a join with three tables: employees, departments and locations 
-- to find the name, including first_name and last_name, jobs, department name and ID, of the employees working in London.

SELECT e.first_name, e.last_name, e.job_id, d.department_name, d.department_id, l.city
FROM employees AS e
INNER JOIN departments AS d ON e.department_id=d.department_id
INNER JOIN locations AS l ON d.location_id=l.location_id
WHERE l.city='London';

--Q4. Write a query to make a join with two tables to find the employee id, last_name as Employee
-- along with their manager_id and last name as Manager.
 
SELECT e.employee_id, e.last_name AS Employee, e.manager_id, m.last_name AS Manager
FROM employees AS e
JOIN employees AS m ON e.manager_id = m.employee_id;

-- Q5. Write a query to make a join with two tables employees and departments, to get the employees working in each department
-- (retrieve the employees details, and the department name and number).
SELECT e.first_name, e.last_name, e.job_id, d.department_name, d.department_id
FROM employees AS e
INNER JOIN departments AS d ON e.department_id=d.department_id;

-- Q6. Write a query to make a join to find the employees who worked in a department which ID is 90 
-- (retrieve the employee ID, job title and number of days the employee worked).

SELECT e.employee_id, j.job_title, AGE(CURRENT_DATE, e.hire_date) AS days_worked
FROM employees AS e
JOIN jobs AS j ON e.job_id = j.job_id
WHERE e.department_id = 90;

-- Q7.Write a query to make a join with three tables, departments, employees, and locations to display the department name, manager name, and city.
SELECT d.department_name, CONCAT(e.first_name, ' ', e.last_name) AS manager_name, l.city
FROM departments AS d
JOIN employees AS e ON d.department_id=e.department_id
JOIN locations AS l ON d.location_id=l.location_id;

-- Q8. Write a query to make a join with two tables, employees and jobs 
-- to display the job title and average salary of the employees.

SELECT j.job_title, AVG(e.salary) AS average_salary
FROM employees AS e
JOIN jobs AS j ON e.job_id = j.job_id
GROUP BY j.job_title;

--Q9. Write a query to make a join with two tables, employees and departments
-- to display department name, first_name and last_name, hire date and salary for all the managers who achieved a working experience of more than 15 years.

SELECT d.department_name, e.first_name, e.last_name, e.hire_date, e.salary
FROM departments AS d
JOIN employees AS e ON d.department_id = e.department_id
WHERE e.job_id IN (
  SELECT job_id
  FROM jobs
  WHERE job_title ILIKE '%MANAGER%'
)
AND DATE_PART('year', AGE(CURRENT_DATE, e.hire_date)) >= 15;









