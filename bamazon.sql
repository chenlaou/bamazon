-- CREATE DATABASE FOR BAMAZON --
CREATE DATABASE Bamazon;
USE Bamazon;

-- CREATE TABLE FOR PRODUCTS --
CREATE TABLE products (
    item_id INT(11) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER(11) NOT NULL,
    PRIMARY KEY (item_id)
);

-- INSERT PRODUCT DATA INTO TABLE ROWS --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('Amazon Echo', 'Electronics', 49.99, 500),
        ('Pressure Cooker', 'Cooking', 69.99, 50),
        ('Magnetic Car Mount', 'Car Acessories', 7.99, 750),
        ('Fire HD Tablet', 'Electronics', 79.99, 800),
        ('San Disk 32GB Memory Card', 'Electronics', 13.21, 50),
        ('Roomba Vacuum', 'Electronics', 279.00, 200),
        ('Anker Bluetooth Speaker', 'Electronics', 26.99, 75),
        ('Fire TV Stick', 'Eletronics', 39.99, 450),    
        ('23andME DNA Test', 'Misc', 130.99, 500),
        ('Amazon Cloud Camera', 'Electronics', 119.99, 500);
    
    