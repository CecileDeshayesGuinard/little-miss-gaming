/* PREMIERE PHASE : MEMORY GAME EN 4 ETAPES */


/* CONSTRUCTOR */

class GalleryPart { // la méthode du jeu est caractérisé par la class Gallery
    constructor(cards) {
      this.cards = cards; // métode générale pour créer le constructor. La méthode this.cards concerne tous les éléments de la variable cards dans index.js
      this.pickedCards = []; // this.pickedCards sera un tableau qui contiendra les pairsGuessed
      this.pairsClicked = 0; // on commence avec 0 cartes cliquées avec un max de 2 cartes actives
      this.pairsGuessed = 0; // on commence avec 0 paires trouvées
    };
  
  
    shuffleCards() { // tri des cartes, l'utilisation d'un randomInt garanti un tri complètement aléatoire, il semble que ".sort" effectue un tri par ordre en fonction du premier caractère de la chaine
      this.cards.randomInt(function(min, max) {
        return (min + Math.floor ((max - min + 1) * Math.random ()));
      });
    };
  

    checkIfPair(card1, card2) { // bien spécifier que si click = card1 poussé dans pickedCard
      this.pairsClicked++ // dès que j'ai selectionné deux cartes checkIfPair vérifie si elles ont le même titre, il faut que pairsClicked soit a Max = 2
      if (card2 === card1) {
        this.pairsGuessed++ // on valide le fait d'avoir une paire et on ajoute 1 à la propriété this.pairsGuessed
        return true
      } else {
        return false
      }
    };
  
  
    checkIfFinished() { // controle de fin de jeu
      if (this.pairsGuessed === this.cards.length / 2){ // la condition est que si j'ai trouvé la moitié de l'ensemble des cartes, celà induit que j'ai également trouvé son équivalent et donc réussi le memoru game
        return true
        } else {
        return false
        }
    };


    launchOtherGallery() { // Besoin vérifications
        if (checkIfFinished() === true) {
        return GalleryPart.gallery++ // je veux que la galleries suivant soit activée si la première est terminée
        } else {
        return GalleryPart; // si le jeu n'est pas terminé alors on recommence
        }
    };
};



/*----------------------------------------------------------------------------------------------------------------------------------*/


/* function pour pousser l'image de l'objet selectionnée dans l'id "theCanvas" */


const firstPicture = document.getElementById('theCanvas');
const ctxMain = document.querySelector('theCanvas').getContext('2d');
const WMain = ctx.theCanvas.width;
const HMain = ctx.theCanvas.height;

firstPicture.innerHTML = logoSelected;
otherElement.innerHTML = firstPicture.innerHTML;



/* function pour pousser les 4 images de la galerie selectionnée dans les "canvas" aléatoirement, le but est que l'emplacement dans le tableau soit non linéaire */

const fourPictures = document.getElementsByClassName('canvas');
const ctxChild = document.querySelector('canvas').getContext('2d');
const WChild = ctx.canvas.width;
const HChild = ctx.canvas.height;

fourPictures.innerHTML = recognizerShow();
otherElement.innerHTML = fourPictures.innerHTML;


/*---------------------------------------------------------------------------------------------------------------------------------*/


/* le click sur play permet de lancer les functions et de projeter les images sur la page HTML pour le premier test */


let play = document.getElementById('replay');
 
play.onclick = function () {
    console.log(logoSelected, arrayOfProposition)
};


let otherTurn = document.getElementById('canvas');
 
otherTurn.onclick = function () {
    console.log(logoSelected, arrayOfProposition)
};


/* let theGoodMatch = ... il faut changer la class pour qu'elle corresponde à la photo correspondante */

