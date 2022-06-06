/* PHASE 1: MELANGE DES IMAGES ET DEBUT DE JEU */

let level = 0

let arraySelected = gallery[level]; // j'oblige la selection de la première gallerie dans data.js
console.log(arraySelected);

/* première étape : le mélange des images */


function shuffle() { // un objet est choisi au hasard dans la gallerie selectionnée de data.js
  arraySelected.sort(function(a, b) { // .sort permet le tri entre deux éléments qui se suivent et donc de repositionner sur toute la longeur de l'array chaque éléments par rapport à sont précedent
    // Math.random() // ]0; 1[, ex: 0.123456

    if (Math.random() > .5) { // on créer une condition pour que le Math.random renvoie un nombre entier
      return 1;
    } else {
      return -1;
    }
  });
};

shuffle(); // tu as melange



/* le mélange se fait mais sans projection dans notre HTML */


play.onclick = function () {
  console.log(arraySelected) // au click on affiche les images coté back
};

// ICI il y a un problem car tu "ecrases" arraySelected  oui 

const allImages = Array.from(document.querySelectorAll('table img')); // [ <img>, <img>, ... ]

//
// Parcourir chacune des images de allImages
//   - pour chacune: mettre a jour son src avec l'image de arraySelected
//
// Changer chaque images de allImages par l'image de arraySelected


/*
arraySelected:

[
  { title: "trotroCirque", image: "trotroLogo.png", backImage: "trotroDosCarte.png"},
  { title: "trotroCirque", image: "trotroLogo.png", backImage: "trotroDosCarte.png"},
  { title: "trotroAccordeon", image: "trotroAccordeon.png", backImage: "trotroDosCarte.png"},
]
*/

allImages.forEach(function (myimage, index) {
  // myimage: <img>
  
  myimage.src = '/images/' + arraySelected[index].image; // ok 
})

let html = '';


/* PHASE 2: CLICK SUR IMAGE */


let backPicture; // je déclare une variable pour la première image cliquée
let pairsCount = 0;
let picture1; // la carte cliquée
let picture2; // anciennement picture1 qui devient picture2 dès la seconde image cliquée

let result; // effet spécial si paire trouvée
result = document.querySelector('span');




allImages.forEach(backPicture => { // on créer un évenement valable pour chaque image de backPictures
  // backPicture est une <img>
  backPicture.onclick = function () { // l'évènement est généré par un click
    
    backPicture.classList.add('turned') // on ajoute la class 'turned' à l'image cliquée
    //
    // max 2 cartes
    //
    picture1 = picture2 // <img>
    picture2 = backPicture // <img>

    // si picture1 et picture2 ont le meme src: on a trouve une paire

    console.log(picture2.src)
    console.log(backPicture.src)
    
    
    
    if (picture1) {
        
      if (picture2.src === picture1.src) {
        console.log('win');
        pairsCount++;
        // effet win au click avec remove lost si existe
        result.classList.add('flashWin');
        result.classList.remove('flashLost');
        // bloquer les 2 cartes avec la class 'validate' et supprimer la class 'turned' qui ne sert que temporairement
        picture1.classList.replace('turned','validate');
        picture2.classList.replace('turned', 'validate');
        picture1 = ''; // je supprime la backPicture pour repartir à 0 (autrement, le jeu recommance avec une backPicture lors du premier click)
        picture2 = ''; // je supprime la picture2 pour repartir à 0 (autrement, le jeu recommance avec une backPicture lors du premier click)
      } 
        else {
          console.log('lost');
          // remettre les 2 cartes a 0 (seulement celle ayant la class 'turned', validate n'est pas touché)
          picture2.classList.remove('turned');
          picture1.classList.remove('turned');
          // effet lost au click avec remove win si existe
          result.classList.add('flashLost');
          result.classList.remove('flashWin');
          picture1 = ''; // je supprime la picture1 pour repartir à 0 (autrement, le jeu recommance avec une backPicture lors du premier click)
          picture2 = ''; // je supprime la picture2 pour repartir à 0 (autrement, le jeu recommance avec une backPicture lors du premier click)
        }
    }  
    else {
      console.log('first clicked image');
    };

    /*Pourquoi remplacer 'turned' par 'validate"
      'turned' permet de retourner les images cliquées. il est donc important de l'enveler en cas d'échec.
      Egalement, 'turned' ne peut être gardé sur les paires trouvées car le moindre échec enlèverait nos gains précédents en supprimant la classe.
      Pour palier à ce problème, nous remplaçons la class 'turned' par 'validate' qui n'est jamais éffacée
      Un problème survient automatiquement avec notre choix de jeu : un double click sur une même image valide une paire qui n'en est pas une.
      Initialement, je voulais trouvé une solution en .js mais ceci, en plus d'être compliqué, rendait le code erratique.
      Solution trouvée via le .css : { pointer-events: none; }
      Ce code .css attribué aux classes 'turned' et 'validate' empeche le click sur les images les possédant, donc déjà cliquées
    */


    if (pairsCount === arraySelected.length / 2) { // on controle si le jeu est terminé
      console.log('first level over, now second level !');
    };
  };
});

/* if (pairsCount++) {
  let win = document.getElementById('win'); // click sur élément HTML ayant l'id "play"

play.onclick = function () {
console.log(backPictures) // au click on affiche les images coté back
};
} */