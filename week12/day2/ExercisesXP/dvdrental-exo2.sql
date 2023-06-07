--EXERCISES XP-day 2-week 12
-- Exercise 2 : DVD Rental
-- Q1. Use UPDATE to change the language of some films.
-- Make sure that you use valid languages.

 SELECT * FROM film
 INNER JOIN language ON film.language_id=language.language_id;
 
 UPDATE  film
 SET language_id=2
 WHERE (title='Agent Truman')
 
--Q2. Which foreign keys (references) are defined for the customer table? 
-- address_id and store_id
-- How does this affect the way in which we INSERT into the customer table?
-- when inserting values into customer table, we must insert address_id and store_id

--Q3. We created a new table called customer_review.
-- Drop this table. Is this an easy step, or does it need extra checking?
-- we can use this syntax to delete the table, no extra checking
DROP TABLE customer_review;

-- Q4. Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

SELECT * FROM rental
WHERE (return_date IS NULL);

--Q5. Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

SELECT film.film_id, film.replacement_cost , rental.rental_id, rental.return_date FROM rental 
INNER JOIN inventory 
ON rental.inventory_id=inventory.inventory_id
LEFT JOIN film ON inventory.film_id=film.film_id
WHERE rental.return_date IS NULL
ORDER BY film.replacement_cost DESC LIMIT 30

-- Q6. Your friend is at the store, and decides to rent a movie. 
-- He knows he wants to see 4 movies, but he can’t remember their names. 
-- Can you help him find which movies he wants to rent?
-- 1.The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

SELECT title FROM film
WHERE film.description ILIKE '%sumo%wrestler%' 
AND film_id 
IN (SELECT film_id FROM film_actor
WHERE actor_id = (SELECT actor_id FROM actor WHERE first_name='Penelope' AND last_name='Monroe'));

-- 2. The 2nd film : A short documentary (less than 1 hour long), rated “R”.

SELECT film.title, film.length, film.rating, category.name FROM film
INNER JOIN film_category ON film.film_id = film_category.film_id
INNER JOIN category ON category.category_id= film_category.category_id
WHERE length<60 AND rating='R' AND category.name='Documentary';

-- 3. The 3rd film : A film that his friend Matthew Mahan rented.
-- He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

SELECT film.title, film.rental_rate, customer.first_name, customer.last_name, rental.rental_date, rental.return_date 
FROM inventory
INNER JOIN film ON film.film_id=inventory.film_id
INNER JOIN rental ON rental.inventory_id=inventory.inventory_id
INNER JOIN customer ON customer.customer_id= rental.customer_id
WHERE customer.first_name='Matthew' 
AND customer.last_name='Mahan'
AND film.rental_rate > 4 
AND rental.return_date> '2005-07-28'
AND rental.return_date< '2005-08-01'

-- 4.The 4th film : His friend Matthew Mahan watched this film, as well.
-- It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

SELECT film.title, customer.first_name, customer.last_name,film.description 
FROM inventory
INNER JOIN film ON film.film_id=inventory.film_id
INNER JOIN rental ON rental.inventory_id=inventory.inventory_id
INNER JOIN customer ON customer.customer_id= rental.customer_id
WHERE customer.first_name='Matthew' 
AND customer.last_name='Mahan'
AND (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
ORDER BY film.replacement_cost DESC LIMIT 1;









