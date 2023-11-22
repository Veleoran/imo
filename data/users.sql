CREATE TABLE `users` (
  `id` int(11) NOT NULL,AUTO_INCREMENT PRIMARY KEY,
  `email` varchar(120) NOT NULL,
  `password` varchar(128) NOT NULL,
  `civility` enum('1','2') NOT NULL DEFAULT '1',
  `lastname` varchar(80) DEFAULT NULL,
  `firstname` varchar(80) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `contacts` (
  `id` int(11) NOT NULL,
  `email` varchar(120) NOT NULL,
  `password` varchar(128) NOT NULL,
  `civility` enum('1','2') NOT NULL DEFAULT '1',
  `lastname` varchar(80) DEFAULT NULL,
  `firstname` varchar(80) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  `info` text,
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

CREATE TABLE `realties` (
  `id` INT(11) NOT NULL, AUTO_INCREMENT PRIMARY KEY,
  `user_id` INT(11), NOT NULL,
  `contact_id` INT(11), NOT NULL,
  `address1` VARCHAR(80), NOT NULL,
  `address2` VARCHAR(80), NOT NULL,
  `town` VARCHAR(80), NOT NULL,
  `zipcode` VARCHAR(6), NOT NULL,
  `info_address` TEXT,
  `type` ENUM('1', '2', '3', '4', '5') NOT NULL,
  `area` INT(5) DEFAULT 0, 
  `room` INT(2) DEFAULT 0, 
  `price` INT(8), NOT NULL,
  `sold` BOOLEAN,
  `online` BOOLEAN,
  `info` TEXT,
  `created_date` DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  FOREIGN KEY (`contact_id`) REFERENCES `contacts` (`id`)
);



ALTER TABLE `users` ADD PRIMARY KEY (`id`);

ALTER TABLE `users` MODIFY `id` int NOT NULL AUTO_INCREMENT;