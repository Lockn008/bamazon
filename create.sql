CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
	item_id INTEGER(5) NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(32),
    department_name VARCHAR(32),
    price INTEGER(4),
    stock_quantity INTEGER(4),
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Milk Powder", "Grocery", 15, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Chocolate", "Grocery", 4, 100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Blu-ray Player", "Electronic", 85, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("PlayStation 4", "Electronics", 400, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Spaghetti", "Grocery", 3, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Deodorant", "Pharmacy", 7, 14);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ski Boots", "Sporting Goods", 250, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Jeans", "Clothing", 25, 25);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toothpaste", "Pharmacy", 4, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pizza", "Grocery", 5, 20);

SELECT * FROM products;