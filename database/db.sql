CREATE DATABASE db_challenge;

USE db_challenge;

CREATE TABLE `Personajes` (
	`personaje_id` INT NOT NULL AUTO_INCREMENT,
	`imagen` VARCHAR(255) NOT NULL,
	`nombre` VARCHAR(60) NOT NULL,
	`edad` INT NOT NULL,
	`peso` DECIMAL(9,2) NOT NULL,
	PRIMARY KEY (`personaje_id`)
);

CREATE TABLE IF NOT EXISTS `Genero` (
	`genero_id` INT NOT NULL AUTO_INCREMENT,
	`nombre` VARCHAR(60) NOT NULL UNIQUE,
	`imagen` VARCHAR(255) NOT NULL,
	`produccion` VARCHAR(60) NOT NULL,
	PRIMARY KEY (`genero_id`)
);
CREATE TABLE IF NOT EXISTS `Users` (
	`user_id` INT NOT NULL AUTO_INCREMENT,
	`user` VARCHAR(60) NOT NULL UNIQUE,
	`pass` VARCHAR(60) NOT NULL,
	PRIMARY KEY (`user_id`)
);

CREATE TABLE IF NOT EXISTS `Produccion` (
	`produccion_id` INT NOT NULL AUTO_INCREMENT,
	`imagen` VARCHAR(255) NOT NULL,
	`titulo` TEXT(255) NOT NULL UNIQUE,
	`fecha_creacion` DATE NOT NULL,
	`calificacion` INT NOT NULL,
	`personajes` VARCHAR(60) NOT NULL,
	`genero` VARCHAR(60) NOT NULL,
	PRIMARY KEY (`produccion_id`)
);

CREATE TABLE IF NOT EXISTS `Produccion_Personaje` (    
	`produccion_id1` INT NOT NULL,
	`personaje_id1` INT NOT NULL
);

ALTER TABLE `Produccion` ADD CONSTRAINT `Produccion_fk0` FOREIGN KEY (`genero`) REFERENCES `Genero`(`nombre`);

ALTER TABLE `Produccion_Personaje` ADD CONSTRAINT `Produccion_Personaje_fk0` FOREIGN KEY (`produccion_id1`) REFERENCES `Produccion`(`produccion_id`);

ALTER TABLE `Produccion_Personaje` ADD CONSTRAINT `Produccion_Personaje_fk1` FOREIGN KEY (`personaje_id1`) REFERENCES `Personajes`(`personaje_id`);

DESCRIBE Genero