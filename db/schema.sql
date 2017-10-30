CREATE DATABASE burgers_db;

USE burgers_db;

CREATE table burgers(
id INT(11)  NOT NULL,
burger_name VARCHAR(50),
devoured BOOLEAN DEFAULT false,
date TIMESTAMP,
PRIMARY KEY(id)
)


