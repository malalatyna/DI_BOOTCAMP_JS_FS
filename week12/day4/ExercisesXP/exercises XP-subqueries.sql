-- Exercises XP
-- Week 12-day4
-- SUBQUERIES
-- Q1. Write a query to find the first_name, last_name and salaries of the employees
-- who have a higher salary than the employee whose last_name is Bull.
SELECT first_name, last_name, salary
FROM employees
WHERE salary > (SELECT salary FROM employees WHERE last_name = 'Bull');
-- Q2. Write a SQL subquery to find the first_name and last_name of the employees under a manager 
-- who works for a department based in the United States.
SELECT first_name, last_name
FROM employees
WHERE manager_id IN (
    SELECT employee_id
    FROM employees
    WHERE department_id IN (
        SELECT department_id
        FROM departments
        WHERE location_id IN (
            SELECT location_id
            FROM locations
            WHERE country_id = (
                SELECT country_id
                FROM countries
                WHERE country_name ILIKE '%United%States%'
            )
        )
    )
);
-- Q3. Write a SQL subquery to find the first_name and last_name of the employees who are working as managers.
SELECT first_name, last_name
FROM employees
WHERE job_id IN (
        SELECT job_id
        FROM jobs 
		WHERE job_title ILIKE '%Manager%'
);
-- Q4. Write a SQL subquery to find the employee(s) first_name and last_name, 
-- which salary is greater than the average salary of the employees.

SELECT first_name, last_name
FROM employees
WHERE salary > (SELECT AVG(salary) FROM employees);

-- Q5. Write a SQL subquery to find the employee(s) first_name and last_name, 
-- which salary is equal to the minimum salary of their job position.

SELECT first_name, last_name
FROM employees
WHERE (salary = (
	SELECT min_salary 
	FROM jobs 
	WHERE jobs.job_id=employees.job_id
	)
);
--Q6. Write a query to find the names (first_name, last_name) of the employees 
-- who are not supervisors.

SELECT first_name, last_name
FROM employees
WHERE (job_id IN (
		SELECT job_id FROM jobs WHERE job_title <> 'supervisors' 
	)	
);
-- Q7. Write a SQL subquery to find the employee(s) ID, first name, last name and salary of all employees 
-- whose salary is above the average salary for their departments.

SELECT employee_id, first_name, last_name, salary
FROM employees
WHERE salary > (
	SELECT AVG(salary) 
	FROM employees WHERE department_id = employees.department_id	
);
-- Q8. Write a subquery to find the 5th maximum salary of all salaries.

SELECT MIN(salary) AS fifth_max_salary
FROM (
    SELECT salary
    FROM employees
    ORDER BY salary DESC
    LIMIT 5
) AS subquery;

--Q9. Write a subquery to find the 4th minimum salary of all the salaries

SELECT MIN(salary) AS fourth_max_salary
FROM (
    SELECT salary
    FROM employees
    ORDER BY salary DESC
    LIMIT 4
) AS subquery;
--Q10. Write a query to list the department name and number, 
-- of all the departments in which there are no employees.
SELECT department_name,department_id 
FROM departments 
WHERE department_id NOT IN (SELECT department_id from employees);








