-- week 12 - day 4
-- Daily Challenge : Items & Orders
-- Q1. Create a table called product_orders and a table called items. 
-- You decide which fields should be in each table, although make sure the items table has a column called price.
CREATE TABLE product_orders(
	order_id SERIAL PRIMARY KEY NOT NULL,
	date DATE NOT NULL
);

CREATE TABLE items(
	item_id SERIAL PRIMARY KEY,
	item_name VARCHAR(50) NOT NULL,
	fk_order_id INTEGER NOT NULL,
	quantity INTEGER NOT NULL,
	price NUMERIC(10,2)NOT NULL,
	FOREIGN KEY (fk_order_id) REFERENCES product_orders(order_id) ON DELETE CASCADE
);
-- Q2.There should be a one to many relationship between the product_orders table and the items table. 
-- An order can have many items, but an item can belong to only one order.

-- The items table has a foreign key 'fk_order_id' that references the order_id field in the product_orders table, 
-- establishing the one-to-many relationship.
INSERT INTO product_orders (date)
VALUES ('2023-06-08'),
		('2023-08-01'),
		('2023-06-11');
INSERT INTO items (item_name, fk_order_id, quantity, price)
VALUES ('Item 1', 1, 7, 10.99),
       ('Item 2', 1, 3, 15.49),
       ('Item 3', 1, 4, 5.99);
INSERT INTO items (item_name, fk_order_id, quantity, price)
VALUES ('Item 1', 2, 7, 34.00),
       ('Item 2', 2, 3, 11.11),
       ('Item 3', 2, 4, 3.33);
   
--Q3. Create a function that returns the total price for a given order.

CREATE OR REPLACE FUNCTION total_price(order_id INTEGER) 
RETURNS NUMERIC(10, 2) AS $total_price$
BEGIN
   RETURN (SELECT SUM(price * quantity) FROM items WHERE fk_order_id = order_id);
END;
$total_price$ LANGUAGE plpgsql;
SELECT total_price(1) AS total_price;
SELECT total_price(2) AS total_price;

--Q4. Bonus
-- 1.Create a table called users.
CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
);
INSERT INTO users(username)
VALUES('johndoe'),
	  ('nickjohn'),
	  ('alansmith');
SELECT * FROM users;
SELECT * FROM product_orders;
-- 2.There should be a one to many relationship between the users table and the product_orders table.

-- Add a foreign key column in the product_orders table
ALTER TABLE product_orders
ADD COLUMN fk_user_id INTEGER,
ADD FOREIGN KEY (fk_user_id) REFERENCES users(user_id) ON DELETE CASCADE;

UPDATE product_orders
SET fk_user_id = 1
WHERE order_id = 1;

UPDATE product_orders
SET fk_user_id = 2
WHERE order_id = 2;

UPDATE product_orders
SET fk_user_id = 3
WHERE order_id = 3;

SELECT * FROM users
JOIN product_orders ON users.user_id = product_orders.fk_user_id;

-- 3.Create a function that returns the total price for a given order of a given user.

CREATE OR REPLACE FUNCTION total_price_by_user(user_id INTEGER, order_id INTEGER)
RETURNS NUMERIC(10, 2) AS $total_price_by_user$
BEGIN
   RETURN (
      SELECT SUM(price * quantity)
      FROM items
      WHERE fk_order_id = order_id
      AND fk_order_id IN (
         SELECT order_id
         FROM product_orders
         WHERE fk_user_id = user_id
      )
   );
END;
$total_price_by_user$ LANGUAGE plpgsql;
SELECT total_price(1) AS total_price;
