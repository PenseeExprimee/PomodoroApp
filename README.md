# 🍅 Pomodoro App

![Aperçu de l'application](./src/assets/PsychoHomePage.png)

> Une application Pomodoro simple développée pas à pas, dans un objectif d’apprentissage.  
> Ce dépôt accompagne une vidéo YouTube où je documente la consruction de l’application.
> Ce guide est volontairement peu détaillé. La "correction" étant disponible, copier coller les lignes de code 1 par 1 n'aurait aucun intérêt pour vous.
> Le but est de vous donner les grandes lignes et de vous encourager à faire des recherches si nécessaire.
> Si vous n'avez aucune idée de ce dont parle l'une des étapes, pas de panique. C'est le moment de faire des recherches pour en apprendre plus.
> Lien vers la vidéo: 👉🏿 https://youtu.be/Jyw7DjxNnrI

## 🎯 Objectif du projet

- Comprendre la structure d’une application simple
- Manipuler HTML / CSS / JavaScript
- Mettre en place une logique de timer
- Gérer des états (play, pause, reset)
- Apprendre à tester son code à chaque étape


## 🧰 Technologies utilisées

- HTML5
- CSS
- JavaScript


## 📁 Structure du projet

pomodoro-app/
├── index.html
├── style.css
├── script.js
└── src/

## 🚀 Étape 1 — Créer et préparer le projet GitHub

### 🎯 Objectif
> Avoir un projet propre, clonable, et prêt à être modifié.
- Créer le dépôt GitHub:  Aller sur GitHub, cliquer sur New repository
  - Nom : pomodoro-app
  - Cocher Add a README file
  - Cliquer sur Create repository

- Cloner le projet sur ton ordinateur
Dans un terminal :
  - git clone https://github.com/TON_USERNAME/pomodoro-app.git
  - cd pomodoro-app
- Créer les fichiers de base
Dans le dossier du projet, crée :
  - index.html
  - style.css
  - script.js
- Lier les fichiers entre eux. Dans index.html, vérifier que :
  style.css est bien lié dans <head>, 
  script.js est bien lié avant </body>

✅ Checkpoints de test
  Ouvre index.html dans ton navigateur
  La page s’ouvre sans erreur
  La console développeur est vide. Pour ouvrir la console développeur, clique droit + inspecter.

## 🧱 Étape 2 — Créer la structure HTML
### 🎯 Objectif
> Afficher une interface minimale du Pomodoro.
  Dans index.html :
  - Créer un conteneur principal
  - Ajouter un titre
  - Ajouter un affichage du temps
  - Ajouter trois boutons : Start, Pause, Reset
> Conseils: Utiliser des balises simples (div, h1, button). Ajoute des id ou class pour les retrouver en JavaScript.

✅ Checkpoints de test
  - Le titre s’affiche
  - Le timer affiche 25:00
  - Les trois boutons sont visibles
  - Aucun style avancé pour l’instant
  
## 🎨 Étape 3 — Styliser l’application avec CSS
### 🎯 Objectif
  Rendre l’interface lisible et agréable.
  À faire dans style.css
  - Centrer l’application sur la page
  - Aligner les éléments verticalement
  - Donner une taille lisible au timer
  - Styliser les boutons (couleur, taille, hover)
> Conseils: Tester chaque modification visuellement

  ✅ Checkpoints de test
  L’app est centrée à l’écran
  Le timer est bien lisible
  Les boutons réagissent au survol

## ⏱️ Étape 4 — Initialiser le timer en JavaScript
### 🎯 Objectif
> Afficher dynamiquement un temps en minutes et secondes.
  À faire dans script.js: 
  - Créer une variable pour le temps total (25 minutes).
  - Convertir ce temps en secondes
  - Mettre à jour l’affichage HTML
  - Créer une fonction d’affichage du temps

✅ Checkpoints de test
  - Le timer affiche toujours 25:00
  - En modifiant la valeur dans le code, l’affichage change
  - Aucun bouton n’est encore fonctionnel

## ▶️ Étape 5 — Lancer le compte à rebours (Start)
### 🎯 Objectif
> Faire diminuer le temps chaque seconde.
  - Ajouter un eventListener sur le bouton Start
  - Utiliser setInterval
  - Décrémenter le temps chaque seconde
  - Mettre à jour l’affichage
  Points importants: 
  - Empêcher plusieurs timers en même temps
  - Stocker l’intervalle dans une variable
  ✅ Checkpoints de test
    - Le timer démarre au clic sur Start
    - Le temps diminue correctement
    - Cliquer plusieurs fois sur Start ne casse rien
    
## ⏸️ Étape 6 — Pause du timer
### 🎯 Objectif
> Arrêter temporairement le compte à rebours.
    - Ajouter un bouton Pause
    - Utiliser clearInterval
    - Conserver le temps actuel (pour le timer puisse reprendre si on re appuie sur start.

✅ Checkpoints de test
  - Pause fige le temps
  - Start reprend au bon moment
  - Le timer ne repart pas de zéro

## 🔄 Étape 7 — Réinitialiser le timer
### 🎯 Objectif
> Revenir à l’état initial.
  - Ajouter un bouton Reset
  - Arrêter le timer
  - Remettre le temps à 25:00
  - Mettre à jour l’affichage

✅ Checkpoints de test
  - Reset remet toujours à 25:00
  - Le timer est arrêté après reset
  - Start fonctionne à nouveau

## 🔔 Étape 8 — Fin du Pomodoro
### 🎯 Objectif
> Gérer la fin du compte à rebours proprement.
  - Détecter quand le temps atteint 0
  - Arrêter automatiquement le timer
  - Afficher un message ou une alerte

✅ Checkpoints de test
  - Le timer ne passe jamais en négatif
  - Le compte à rebours s’arrête à 00:00
  - Le comportement est clair pour l’utilisateur

## 🧪 Checklist finale
Avant de considérer le projet terminé :
 - Aucun message d’erreur dans la console
 - Tous les boutons fonctionnent
 - Le timer est fiable
 - Le code est lisible et commenté


💡 Pistes d’amélioration
- Laisser l'utilisateur choisir la durée d'une session de travail et la durée d'une pause.
- Changer le background pour les différentes phases.
- Griser les boutons quand ils ne sont pas utilisables.
- Ajouter un compteur de sessions
- Ajouter du sons ou de notifications
- Sauvegarde en localStorage
> 🫶 Mot de la fin
> Si vous êtes débutant(e) :
- Prenez votre temps, tester, casser le code, recommencer! c’est comme ça qu’on apprend.
