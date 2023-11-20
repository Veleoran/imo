# git
Création d'une Agence Immobilière (Require MySQL)

Description du Projet

Ce projet consiste à créer un site vitrine pour une agence immobilière. L'objectif principal est d'utiliser NodeJS, Express, Pug, et MySQL. Il vise à renforcer la compréhension des middleware, à approfondir les connaissances dans l'architecture MVC, et à découvrir les JWT (JSON Web Tokens).
Ressources

Étapes du Projet

Étape 1: Initialisation de l'Espace de travail

Pour les versions anciennes de NodeJS, suivez cette étape.
Créez un répertoire de travail et initialisez le fichier ./package.json via la commande npm init.
Pour ceux qui débutent avec npm, il est conseillé de réaliser l'exercice HOW-TO-NPM.

Étape 2: Installations Nécessaires

Installer express, pug, et dotenv en utilisant la commande: npm i express pug dotenv.

Étape 3: Installation de Browser-Refresh

Installer Browser-Refresh globalement et l'ajouter aux dépendances de développement: npm install -g browser-refresh --save-dev.
Pour lancer le serveur, utilisez browser-refresh server au lieu de node server.
Modifier le fichier ./package.json pour faciliter le démarrage.

Étape 4: Créer votre Serveur HTTP

Créer le fichier principal ./server.js à la racine du projet (au même niveau que ./package.json).
Écrire le code nécessaire pour obtenir un serveur HTTP.

Étape 5: Création de Layout avec Pug

    Description: Créer un fichier ./templates/layout.pug avec les balises HTML de base et un titre
    
Étape 6: Configuration du Serveur et Routes

    Description: Configurer le serveur pour utiliser les routes et les vues appropriées. Inclure les middlewares nécessaires.

Étape 7: Création des Vues avec Pug

    Description: Développer les vues nécessaires pour l'application en utilisant Pug. Cela inclut la création de templates pour différentes pages du site.

Étape 8: Gestion des Données Utilisateur

    Description: Mettre en place la gestion des données utilisateur, y compris la récupération et la manipulation de ces données.

Étape 9: Intégration de la Base de Données

    Description: Intégrer la base de données MySQL dans l'application. Cela inclut la connexion à la base de données et l'exécution de requêtes.

Étape 10: Sécurisation de l'Application

    Description: Mettre en œuvre des mesures de sécurité pour protéger l'application. Cela peut inclure la gestion des sessions, la validation des entrées, et d'autres pratiques de sécurité.

Étape 11: Structuration de la Table users

    Description: Créer la structure de la table users dans la base de données.

Étape 12: Modification du fichier database_sql.js

    Description: Modifier le fichier ./app/database_sql.js pour ajouter multipleStatements permettant d'exécuter plusieurs requêtes simultanément.

Étape 13: Prise en Compte du Formulaire d'Inscription

    Description: Ajouter une route en POST pour l'inscription et enregistrer les données soumises. Créer ./src/entity/Users.js et ./src/repository/UsersRepository.js.

Étape 14: Contrôle de l'Email Existant

    Description: Ajouter un contrôle pour vérifier si l'email est déjà existant en BDD et ne pas enregistrer dans ce cas.

Étape 15: Hashage du Mot de Passe

    Description: Hasher le mot de passe de l'utilisateur avant de l'enregistrer en BDD en utilisant bcryptjs.
