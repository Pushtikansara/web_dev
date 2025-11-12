CREATE DATABASE sales_db;
USE sales_db;

CREATE Table Salespeople(
    Snum INT PRIMARY KEY,
    Sname VARCHAR(50),
    city VARCHAr(50),
    comm Decimal(4,2)
);
CREATE Table Customer(
    Cnum INT PRIMARY KEY,
    Cname VARCHAR(50),
    City VARCHAr(50),
    
CREATE DATABASE sales_db;
USE sales_db;

CREATE TABLE Salespeople (
    snum INT PRIMARY KEY,
    sname VARCHAR(50),
    city VARCHAR(50),
    comm DECIMAL(4,2)
);

CREATE TABLE Customers (
    cnum INT PRIMARY KEY,
    cname VARCHAR(50),
    city VARCHAR(50),
    rating INT,
    snum INT,
    FOREIGN KEY (snum) REFERENCES Salespeople(snum)
);

INSERT INTO Salespeople (snum, sname, city, comm) VALUES
(1001, 'Rahul', 'London', 0.12),
(1002, 'Priya', 'San Jose', 0.13),
(1003, 'Aakash', 'London', 0.11),
(1004, 'Neelam', 'Barcelona', 0.10),
(1005, 'Vikram', 'New York', 0.15);

INSERT INTO Customers (cnum, cname, city, rating, snum) VALUES
(2001, 'Sharma', 'London', 100, 1001),
(2002, 'Singh', 'Rome', 200, 1003),
(2003, 'Patel', 'San Jose', 300, 1002),
(2004, 'Kumar', 'Berlin', 100, 1002),
(2005, 'Gupta', 'London', 230, 1001),
(2006, 'Rao', NULL, 150, 1004);

SELECT snum, sname, city, comm
FROM Salespeople;

SELECT sname, comm
FROM Salespeople
WHERE city = 'London';

SELECT *
FROM Customers
WHERE rating = 100;

SELECT *
FROM Customers
WHERE city = 'San Jose' OR rating > 200;

SELECT *
FROM Customers
WHERE city = 'San Jose' AND rating > 200;

SELECT sname, city
FROM Salespeople
WHERE city = 'London' AND comm > 0.10;

SELECT *
FROM Salespeople
WHERE city IN ('Barcelona', 'London');

SELECT *
FROM Customers
WHERE city IS NULL;

    rating INT,
    Snum INT,
    FOREIGN KEY(Snum) REFERENCES Salespeople(Snum)

);

INSERT INTO Salespeople (Snum,Sname,city,comm) VALUES
(1001,Rahul,London,0.12),
(1002,Priya,San Jose,0.13),
(1003,Aakash,London,0.11),

INSERT INTO Customer (Cnum,Cname,City,rating,Snum) VALUES
(2001,Sharma,London,100,1001),
(2004,Kumar,Berlin,100,1002),

SELECT *
FROM Customer
WHERE rating=100;

SELECT Snum, Sname, city ,comm
FROM Salespeople;

SELECT *
FROM Customer
WHERE city='San Jose'OR rating>200;
