create database reading_log;
use reading_log;

DROP TABLE IF EXISTS users;
CREATE TABLE users(
`id` INT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(50) NOT NULL,
`email` VARCHAR(80) UNIQUE NOT NULL,
`hashedPassword` VARCHAR(255) NOT NULL
);

DROP TABLE IF EXISTS books;
CREATE TABLE books(
`id`INT PRIMARY KEY AUTO_INCREMENT,
`name` VARCHAR(40) NOT NULL,
`author` VARCHAR(50) NOT NULL,
`review` TEXT NULL,
`score` INT NOT NULL,
`cover_image` MEDIUMTEXT, 
`user_id` INT NOT NULL,
FOREIGN KEY(`user_id`) REFERENCES users(id) 
);