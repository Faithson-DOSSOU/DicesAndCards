# Dices & Cards – Application de Jeux de Société
## Description du projet

Dices & Cards est une application web interactive développée dans le cadre du cours Bases de Données Avancées (TI603) de l'EFREI. L’objectif est de concevoir une base de données relationnelle normalisée, puis de la coupler à une application fonctionnelle dédiée aux jeux de société.

L'application permet à ses utilisateurs de rechercher, consulter, louer des jeux de société, et participer à des événements. Elle s’adresse aux passionnés de jeux, ainsi qu’aux gestionnaires de centres de jeux ou associations ludiques.

## Structure du projet
Le projet suit une structure en cinq grandes étapes :

* **Définition des fonctionnalités et maquettage**

* **Modélisation conceptuelle et logique de la base de données**

* **Implémentation de la base et ajout de fonctionnalités avancées**

* **Développement de l'application connectée**

* **Finalisation, documentation et présentation**

## Fonctionnalités principales
* **Recherche de jeux (filtrage par catégorie, âge, durée, etc.)**

* **Réservation de jeux**

* **Historique des réservations**

* **Gestion d’événements ludiques**

* **Authentification et gestion des rôles (Administrateur, Utilisateur)**

## Base de données

Le modèle s’appuie sur deux jeux de données fournis par Kaggle :

* details.csv : données descriptives des jeux

* ratings.csv : évaluations et statistiques d’usage

Ces fichiers ont servi de base à la conception de notre schéma relationnel enrichi avec des entités comme Utilisateur, Reservation, Événement, etc.

## Fonctionnalités SQL avancées
* **Vues : liste des jeux disponibles, top jeux évalués**

* **Déclencheurs : mise à jour automatique des stocks**

* **Procédures stockées : louer/retourner un jeu, gérer les inscriptions**

* **Indexation : optimisations sur les champs de recherche**

##  Application

L'application est développée en Vue.js + Node.js. Elle est connectée à une base de données MySQL.

Fonctionnalités développées :
* Interface de recherche dynamique

* Page de détails de jeu

* Formulaires de location

* Tableau de bord administrateur

* Connexion sécurisée avec contrôle d'accès

## Tests & Qualité
* Validation des transactions

* Gestion des erreurs SQL

* Tests manuels des fonctionnalités clés

* Amélioration des performances des requêtes

## Contenu du dépôt
* /sql/            #Scripts de création et insertion
* /docs            # MCD, MLD, diagrammes, rapports PDF
* /app             # Code source de l'application
* /data            # Données CSV issues de Kaggle
* README.md            # Ce fichier
 
## Lancement du projet

* Importer les scripts SQL présents dans /sql dans votre SGBD MySQL.

* Configurer l'application pour se connecter à votre base (.env ou config locale).

* Lancer le serveur applicatif.

* Accéder à l’interface via navigateur ou exécutable.

## Équipe projet

* Farid Camed ABOUBAKARI

* Ines MAFOUEKEN KENFACK SONIA

* Oluwafemi Faithson DOSSOU

## Sources

* Jeu de données Kaggle : Board Games Dataset

* Documentation MySQL

* Framework frontend/backend utilisé
