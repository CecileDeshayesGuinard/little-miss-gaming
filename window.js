/* PHASE 1: MELANGE DES IMAGES ET DEBUT DE JEU */

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



/* deuxième étape : je créer une variable backPicture qui montre le dos de l'image */

let backPictures =

function pictureProjection () { // on projette l'image de l'objet trié sur le HTML en mode "non tournée" donc la backImage de chaque
    return objectSelector().backImage;
};
;


/* le click sur play permet de lancer les functions et de projeter les images sur la page HTML pour le premier test */

let play = document.getElementById('play'); // click sur élément HTML ayant l'id "play"

play.onclick = function () {
  console.log(backPictures) // au click on affiche les images coté back
};


backPictures = Array.from(document.querySelectorAll('img')); // [ <img>, <img>, ... ] nous lions les backImages avec la balise img dans notre HTML
let html = '';


/* PHASE 2: CLICK SUR IMAGE */


let backPicture; // je déclare une variable pour la première image cliquée
let pairsCount = 0;

let picture1; // la carte cliquée
let picture2; // anciennement picture1 qui devient picture2 dès la seconde image cliquée


backPictures.forEach(backPicture => { // on créer un évenement valable pour chaque image de backPictures
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
        // bloquer les 2 cartes avec la class 'validate' et supprimer la class 'turned' qui ne sert que temporairement
        picture1.classList.add('validate');
        picture2.classList.add('validate');
        picture1.classList.remove('turned');
        picture2.classList.remove('turned');
        picture1 = ''; // je supprime la backPicture pour repartir à 0 (autrement, le jeu recommance avec une backPicture lors du premier click)
        picture2 = ''; // je supprime la picture2 pour repartir à 0 (autrement, le jeu recommance avec une backPicture lors du premier click)
      } 
        else {
          console.log('loose');
          // remettre les 2 cartes a 0 (seulement celle ayant la class 'turned', validate n'est pas touché)
          picture2.classList.remove('turned');
          picture1.classList.remove('turned');
          picture1 = ''; // je supprime la picture1 pour repartir à 0 (autrement, le jeu recommance avec une backPicture lors du premier click)
          picture2 = ''; // je supprime la picture2 pour repartir à 0 (autrement, le jeu recommance avec une backPicture lors du premier click)
        }
    }  
    else {
      console.log('first clicked image');
    };

    /* Pourquoi remplacer 'turned' par 'validate"
       'turned' permet de retourner les images cliquées. il est donc important de l'enveler en cas d'échec.
       Egalement, 'turned' ne peut être gardé sur les paires trouvées car le moindre échec enlèverait nos gains précédents en supprimant la classe.
       Pour palier à ce problème, nous remplaçons la class 'turned' par 'validate' qui n'est jamais éffacée
       Un problème survient automatiquement avec notre choix de jeu : un double click sur une même image valide une paire qui n'en est pas une.
       Initialement, je voulais trouvé une solution en .js mais ceci, en plus d'être compliqué, rendait le code erratique.
       Solution trouvée via le .css : { pointer-events: none; }
       Ce code .css attribué aux classes 'turned' et 'validate' empeche le click sur les images les possédant, donc déjà cliquées
    */

    if (pairsCount === backPictures.length / 2) { // on controle si le jeu est terminé
        console.log('game over: go to the next game !');
    }
  };

});    

  /*  setTimeout(() => {
      document.querySelectorAll('img').forEach((img) => {
        img.addEventListener('click') (() => {  

          if (titleCompare() !== true)  {
            return img.classList.remove("turned") // je veux enlever la class "turned" des images "en cours de validation" et donc recommencer
          } else {
            return img.classList.remove("turned") && picture1((img) => { // j'enlève quand meme turned mais je rejoute la class "validate" qui ne peu pas s'enlever
              html+=
              `
              <td><img class="validate" width="auto" height="110" src="${image}" alt="${title}"></img></td>
              `
            }) && gameOver() && otherGame() // vérification de fin de gallerie et de jeu
        
          }
        });
      });
    },2000); // j'ai 2 secondes de vue dans le cas ou les validations ne sont pas respectées


/* comment console(log) tout ça ?
   ai-je des problème dans l'iteration des functions et des étapes ?
   fichiers : window / functions
   data.js semble bon
*/
