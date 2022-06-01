Little Miss Gaming 

But : maitriser constructor, gestion database, création HTML dans JS et pousser à l'interactivité, querySelector, .innerHTML, addEventListener...

--------

Sujet : jeu pour enfant
Phase 1 = memory-game à 4 niveaux;
Phase 2 = animations réussite ou échec pour trouver une paire (réussite = chute de neige pour reconstitution bonhomme, échec = on recommence)
Phase 3 = animations au passage de niveau
phase 4 = "flappy-cube" style game pour éviter des obstables - jeu 2D inspiré des jeux d'arcade voir https://codepen.io/abernier/pen/dyympMm ou https://codepen.io/abernier/pen/OJJEVNK?editors=0010 ceci représentera le 5è niveau du jeu.

--------

Principe 1 : trouver des paires d'images;
             8 images sont proposées et le but est de retrouver les paires;

             => un bonhomme de neige se reconstituera sur le flanc gauche du doc HTML. Le but étant qu'il se soit reformé.

Principe 2 : Une fois reconstitué, le bonhomme fait du ski et doit éviter des obstacles
     
--------
           
Disposition :

Gauche : effets dynamiques en fonction de la réponse "vrai" ou "faux";
Haut Droit : Menu simple avec "jouer" et "palmarès";
Droit (corps): memory-game;
Gauche (corps): canvas-ski;

--------

Fonctions JS :

1 Constructor pour faire tourner le jeu et ses conditions
2 DOM
3 CANVA + dynamique
4 Gestion dataBase avec insertion images


--------

:hover :

1 effets de survol Menu;
2 effets de survol image (dans le tableau multi-image) "zoom";
3 insertion principe 2 et disparition principe 1 si validé

--------

Commandes :

Fleches;
Souris ? (comment faire ?)

--------

Principe 1 :
Résultats win : neige qui tombe + élément sonore + autre photo bonhomme de neige;
Resultats loose : étoile qui brille + élément sonore + restart;

principe 2 : réussir le parcour = jeu terminé !


--------

Pourquoi ?

=> gestion database comme "lab-memory-game" (lab non maitrisé);
=> gestion canvas (mauvaise maitrise donc necessite de le refaire dans un projet );
=> gestion DOM;


--------

Questions pour Antoine :

- Comment faire apparaitre mon "HTML de JS" sur mon doc ?






