CREATE TABLE `users` (
  `id` int NOT NULL,
  `email` varchar(120) NOT NULL,
  `password` varchar(128) NOT NULL,
  `civility` enum('1','2') NOT NULL DEFAULT '1',
  `lastname` varchar(80) DEFAULT NULL,
  `firstname` varchar(80) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

ALTER TABLE `users` ADD PRIMARY KEY (`id`);

ALTER TABLE `users` MODIFY `id` int NOT NULL AUTO_INCREMENT;