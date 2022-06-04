
/*
  1 = début de jeu depuis première gallerie
  2 = mélange des images de la galerie et projection sur le doc HTML
  3 = click sur image contenant un titre en commun avec une autre image
  4 = l'image cliquée doit resté retournée
  5 = click sur seconde image
  6 = l'image se retourne au minimum 2 secondes et ne reste retournée que si son titre correspond à l'image 1
  => induit changement de class si paire trouvée et retrait de la classe de l'image 1 si non trouvée
  7 = si toutes les paire sont trouvées, on passe à la gallerie suivante
  8 = si plus de galleries alors on passe au maze runner
*/



/* functions destinée au tri aléatoire de data.js et au repérage de l'image cible et de son match on commence par le premier paramètre */

let arraySelected = gallery[0]; // j'oblige la selection de la première gallerie dans data.js



/* première étape : le mélange des images */

function objectSelector () { // un objet est choisi au hasard dans la gallerie selectionnée de data.js
  arraySelected.sort(function(a, b) { // .sort permet le tri entre deux éléments qui se suivent et donc de repositionner sur toute la longeur de l'array chaque éléments par rapport à sont précedent
    // Math.random() // ]0; 1[, ex: 0.123456

    if (Math.random() > .5) { // on créer une condition pour que le Math.random renvoie un nombre entier
      return 1;
    } else {
      return -1;
    }
  });
};



/* deuxième étape : je créer une variable picture qui contient la function qui retourne l'image du tri effectué par la function object selector */

let backPictures =

function pictureProjection () { // on projette l'image de l'objet trié sur le HTML en mode "non tournée" donc la backImage de chaque
    return objectSelector().backImage;
};
;



/* après avoir cliqué sur une première image, nous devons stocker sa valeur titre, idem pour la seconde image que je compare directement à la première */

let picture1 = undefined; // je déclare une variable pour la première image cliquée


function firstImageCliked ()  { // permet de récupérer le titre correspondant à l'objet selectioné
    return picture1.title && 'turned' && picture1.image // je rajouterai la class "turned" a la balise image correspondant à mon click pour que cette dernière se retourne
};



/* je clique sur la seconde image et la compare à la première */

let picture2 = undefined; // je déclare une variable pour la seconde image cliquée


function secondImageCliked ()  {
  return picture2.title && 'turned' && picture2.image // je rajouterai la class "turned" a la balise image correspondant à mon click pour que cette dernière se retourne
};


function titleCompare ()  { /* permet de comparer les titres des images 1 et 2 et de trouver les pairs */
  if (picture2.title === picture1.title) {
    return true;
  } else {
    return false;
  }
}



/* function destinée à valider une pairs */

function pairsValidation()  { /* pour éviter d'enlever la class turned aux pairs trouvées, je dois rajouter une class qui protège les images des manipulations ultérieures */
  if (titleCompare() !== true)  {
    return picture1 = '';
  } else {
    return 'validate'; //'validate' sera la class retournée dans l'HTML à la place de turned pour l"image1
  }
}



/* je cherche a vérifier si le jeu est terminé ou non */

function gameOver()  { /* a la réussite du jeu, je change de tableau pour aller vers le second */
  if (pairsValidation == arraySelected.length / 2)  {
    gallery[0]++;
  }
}



/* je veux m'assurer que le cheminement des étapes se poursuit entre les jeux */

function otherGame()  { /* dès que le dernier tableau est terminé, je passe au jeu du labyrinthe */
  if (arraySelected > gallery[2]) return mazeGame;
}