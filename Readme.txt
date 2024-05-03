To get full list of Expenses : http://localhost:8080/expense/list
To create expense : use the below curl in ur postman
curl --location 'http://localhost:8080/expense/add-expense' \
--header 'Content-Type: application/json' \
--data '{
    "expenseCategory" : "Grocery",
    "expenseName" : "Tomato",
    "amountSpent" : 25
}'

SQL Scripts:

create database expensemanager;

USE `expensemanager`;

DROP TABLE IF EXISTS `expenses`;
DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `enabled` BOOL NOT NULL DEFAULT 1,
  `creation_time` DATETIME NOT NULL DEFAULT NOW(),
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

CREATE TABLE `expenses` (
  `id` int NOT NULL AUTO_INCREMENT,
  `expense_category` varchar(50) NOT NULL,
  `expense_name` varchar(50) NOT NULL,
  `amount_spent` varchar(50) NOT NULL,
  `expense_date` DATETIME DEFAULT NOW(),
  `user_id` int DEFAULT 101,
  PRIMARY KEY (`id`),
  FOREIGN KEY(`user_id`) REFERENCES users(`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `users` 
VALUES 
(101,'naveen@springboot.com','{noop}test123','Naveen','Wilson',1,now());