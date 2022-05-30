Little Miss Gaming

--------

Sujet : jeu pour enfant basé sur la reconnaissance d'image (film disney + jeu pour enfant);

--------

Principe : cliquer sur l'image correspondant à l'image présenté;
           4 images sont proposées et l'une d'elles est en lien avec l'image présenté;
     
--------
           
Disposition :

Gauche : effets dynamiques en fonction de la réponse "vrai" ou "faux";
Haut Droit : Menu simple avec "jouer" et "palmarès";
Droit (corps): 2 tableaux d'images;

=> 1 : tableau image référente;
=> 2 : tableau images à choisir;

--------

Fonctions JS :

1 Selecteur de la gallerie parmis xGalleries
2 Selecteur du titre d'un objet parmis xObjets de la gallerie
3 Selecteur de "l'indentifier" du titre selectionné donc de l'image
4 Selecteur des 4 images des autres objets dans le tableau 2

Info : le titre les l'élément commun entre identifier & recognizer

5 Function Chronomètre de xTemps ou la recherche est disponible avant loose + changement texte bouton par "Stop - Play" en fonction de l'état du jeu (en pause ou en marche)
==> si fonction chronomètre inadapté aux jeunes enfants mettre une jauge en fonction du reste questions jusqu'a fin de partie
6 Function xPoints en fonctions des xSecondes restantes avant fin de la recherche
7 Function Points
8 Function relative pour comparer le taux de bonnes réponses par rapport au nombre de "questions restante du jeu"
9 Function (nombre max de questions possibles)


--------

:hover :

1 effets de survol Menu;
2 effets de survol image (dans le tableau multi-image);
3 Chronomètre pour temps de réponse (reset nouvelle image);

--------

Commandes :

Fleches;
Souris ? (comment faire ?)

--------

Résultats win : étoiles qui brillent + élément sonore;
Resultats loose : neiges qui tombe + élément sonore;

Résultat final > 70% : étoiles + Bonhomme de neige;
Résultat final < 70% : méchant "faux" prince + neige;

Nouvelles idées à développer;

--------

Pourquoi ?

=> gestion database comme "lab-greatest-movies" (lab non terminé);
=> gestion canvas (mauvaise maitrise donc necessite de le refaire dans un projet );
=> gestion chronomètre (mauvaise maitrise donc necessite de le faire dans un projet);
=> gestion DOM et Memory Game;


--------

Questions pour Antoine :

- Puis-je séparer les fichiers JS = fonctions, datas, animations pour organisation;
- Fichier data JS : Ce type d'image est il valide en JS = j'ai une erreur dans la console
- Function JS : J'ai du mal a comprendre le DOM et le canvas = Je bloque






