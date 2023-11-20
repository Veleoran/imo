-- users.sql

-- Création de la table 'users' si elle n'existe pas déjà
CREATE TABLE IF NOT EXISTS `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(120) NOT NULL,
  `password` varchar(128) NOT NULL,
  `genre` enum('1','2') NOT NULL DEFAULT '1',
  `lastname` varchar(80) DEFAULT NULL,
  `firstname` varchar(80) DEFAULT NULL,
  `phone` varchar(16) DEFAULT NULL,
  -- autres colonnes si nécessaire --
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;