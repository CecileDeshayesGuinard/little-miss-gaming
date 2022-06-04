
/* functions destinée au tri aléatoire de data.js et au repérage de l'image cible et de son match */

let arraySelected = gallery[0];


/* première étape : le mélange des images */

let arrayShuffled;

function objectSelector () { /* un objet est choisi au hasard dans data.js */
  arraySelected.sort(function(a, b) { // .sort permet le tri mais je ne comprend pas l'importance des paramètres. Nous trions les objets de l'array "card"
    // Math.random() // ]0; 1[, ex: 0.123456

    if (Math.random() > .5) { // on créer une condition pour que le Math.random renvoie un nombre entier
      return 1;
    } else {
      return -1;
    }
  });
};


/* deuxième étape : la projection des images en meme temps que le mélange */

let pictures;

function pictureProjection () { /* on projette l'image de l'objet trié sur le HTML en mode "non tournée */
    return objectSelector().images;
};


let title;

function pictureProjection () { /* on projette l'image de l'objet trié sur le HTML en mode "non tournée */
  return objectSelector().title;
};


let picture1 = undefined; /* je déclare une variable pour la première image cliquée */


function titleSelector ()  { /* permet de récupérer le titre correspondant à l'objet selectioné */
    return picture1.title;
};


let picture2 = undefined; /* je déclare une variable pour la seconde image cliquée */


function titleCompare ()  { /* permet de comparer les titres des images 1 et 2 et de trouver les pairs */
  if (picture2.title === picture1.title) {
    return true;
  } else {
    return false;
  }
}


function pairsValidation ()  { /* je souhaite ajouter une class 'turned' sur le doc HTML pour les pairs trouvées */
  if (titleCompare() === true) {
    return 'turned';
  } else {
    return '';
  }
}


function blockPairs()  { /* pour éviter d'enlever la class turned aux pairs trouvées, je dois rajouter une class qui protège les images des manipulations ultérieures */
  if (pairsValidation() !== true)  {
    return picture1 = '';
  } else {
    return 'validate';
  }
}


function gameOver()  { /* a la réussite du jeu, je change de tableau pour aller vers le second */
  if (validatePairs == arraySelected.length / 2)  {
    gallery[0]++;
  }
}


function otherGame()  { /* dès que le dernier tableau est terminé, je passe au jeu du labyrinthe */
  if (arraySelected === gallery[3]) return mazeGame;
}