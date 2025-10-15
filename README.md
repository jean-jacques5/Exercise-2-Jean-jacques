 Copie tout ça dans ton fichier README.md :
# 🗂️ Exercice 2 – API ToDoList en Express.js

##  Objectif
Ce projet est une petite API développée en **Node.js** avec le framework **Express**.  
Elle permet de gérer une liste de tâches (**ToDoList**) avec les actions principales :
- Ajouter une tâche  
- Supprimer une tâche  
- Afficher la liste des tâches  

L’objectif de cet exercice est d’apprendre à utiliser **Express**, à organiser le code avec une **architecture MVC**  
et à créer une API REST fonctionnelle en JavaScript.

---

##  Installation

1️⃣ Cloner le projet
```bash
git clone https://github.com/<ton-pseudo>/Exercise-2-Jean-jacques.git
cd Exercise-2-Jean-jacques

2️⃣ Installer les dépendances
npm install

3️⃣ Lancer le serveur
npm run dev


➡️ Le serveur démarre sur :
http://127.0.0.1:3000

🔗 Routes principales
Méthode	Route	Description
GET	/health	Vérifie que l’API fonctionne
GET	/tasks	Affiche la liste de toutes les tâches
POST	/tasks	Ajoute une nouvelle tâche
DELETE	/tasks/:id	Supprime une tâche précise
DELETE	/tasks	Supprime toutes les tâches
🧩 Exemple de requêtes avec curl
Vérifier que le serveur fonctionne :
curl http://127.0.0.1:3000/health

Ajouter une tâche :
curl -X POST http://127.0.0.1:3000/tasks -H "Content-Type: application/json" -d "{\"title\":\"Faire les courses\",\"notes\":\"Lait, œufs, pain\"}"

Afficher toutes les tâches :
curl http://127.0.0.1:3000/tasks

Supprimer une tâche :
curl -X DELETE http://127.0.0.1:3000/tasks/<ID>

 Architecture du projet (MVC)
Exercise-2-Jean-jacques/
├── app.js               → Point d’entrée du serveur Express
├── package.json         → Scripts et dépendances NPM
├── controllers/         → Logique métier (ajout, suppression, affichage)
│   └── taskController.js
├── routes/              → Définition des routes Express
│   └── taskRoutes.js
├── model/               → Modèle de données (classe Task)
│   └── Task.js
├── data/                → Fichier JSON qui stocke les tâches
│   └── tasks.json
└── README.md

 Auteur

Obre Jolissaint Jean-Jacques
Étudiant en Développement Web – Efrei Paris
📆 Année : 2025
💬 Réalisé dans le cadre du cours Conception et Développement Back-End