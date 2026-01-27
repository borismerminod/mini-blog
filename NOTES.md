Mise en place d'un dépôt git et du gitignore : idéalement on a un git pour le back et un pour le front
Mise en place d'une base de données avec quelques données de tests

Création du back ASP.NET 
On va créer un projet ASP.NET Core Web API
On met en place les classes structurantes dans Models/
On ajoute une classe Service permettant de récupérer/ajouter les données vers la base à travers le Models correspondant
On ajoute le contrôleur qui va permettre de traiter les requêtes vers notre API afin de 
    - Soit de récupérer des données en base en utilisant le service pour les envoyer vers le front
    - Soit de récupérer des données envoyer du front pour les envoyer en base en utilisant le service

Le Program.cs contient la configuration des services, l'ajout des middlewares à utiliser et permet de lancer l'appli
Le fichier appsettings.json contient contient les paramètres de configuration de l'application. Le paramètre ConnectionStrings indique
par exemple les infos de connexion à la base de donnée

Création du front

On va ajouter un service côté front avec : 
- une interface qui va représenter notre modèle de données
- une classe service qui va nous servir à passer des requête vers notre API : 
    - Pour récupérer des données et les gérer leur affichage front
    - Pour envoyer des données vers le back

On a ensuite besoin d'un composant qui va utiliser le service et récupérer les données dont il a besoin pour fonctionner : 
- On utiliser la classe du composant pour récupérer les données et les associer à un attibut du composant
- On utilise le .html et le .scss du composant pour travailler le rendu de la page en fonction des valeurs des données récupérer

Pour que le composant puisse être rendu on a besoin de l'ajouter dans le script app.routes.ts
