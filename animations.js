
/* function pour pousser l'image de l'objet selectionnée dans l'id "theCanvas" */

/*
const firstPicture = document.getElementById('theCanvas');
const ctxMain = document.querySelector('theCanvas').getContext('2d');
const WMain = ctx.theCanvas.width;
const HMain = ctx.theCanvas.height;

firstPicture.innerHTML = logoSelected;
otherElement.innerHTML = firstPicture.innerHTML;*/



/* function pour pousser les 4 images de la galerie selectionnée dans les "canvas" aléatoirement, le but est que l'emplacement dans le tableau soit non linéaire */

/*
const fourPictures = document.getElementsByClassName('canvas');
const ctxChild = document.querySelector('canvas').getContext('2d');
const WChild = ctx.canvas.width;
const HChild = ctx.canvas.height;

fourPictures.innerHTML = recognizerShow();
otherElement.innerHTML = fourPictures.innerHTML;*/


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

