
/*function destinée au tri aléatoire de data.js et au repérage de l'image cible et de son match*/

function objectSelector () { /*un objet est choisie au hasard*/
    return Math.floor(Math.random() * gallery.length);
};

function pictureSelector () { /*une image solution est choisie dans l'objet tiré au sort selectionnée*/
    return objectSelector().recognizer;
};

function logoSelector () { /*une image cible est choisie dans l'objet sélectionné*/
    return objectSelector().identifier;
};

function titleSelector ()  { /*permet de récupérer le titre correspondant à l'objet semectioné*/
    return objectSelector.title;
};

function otherRecognizer ()  {/*permet de choisir au hasard des images du tableau différente de celle correspondant à l'objet selectionné*/
    for (let i=0; i<=gallery.recognizer.length; i++) {
        

        if (objectSelector.recognizer === pictureSelected) {
            continue;
        } else {
            return objectSelector.recognizer();
        }
    }
};

function recognizerShow ()  {/*permet le tri aléatoire entre les éléments selectionnés*/
    const primitiveArray = [pictureSelected,otherImage,otherImage,otherImage];
    primitiveArray.sort();
    return primitiveArray;
}



/*variables de stockage des images de la gallerie*/

const animeSelected = objectSelector(gallery);
const pictureSelected = pictureSelector();
const logoSelected = logoSelector();
const otherImage = otherRecognizer();
const logoTitle = titleSelector();
const arrayOfProposition = recognizerShow();


/*function pour pousser l'image de l'objet selectionnée dans l'id "theCanvas"*/



const firstPicture = document.getElementById('theCanvas');
const ctxMain = document.querySelector('theCanvas').getContext('2d');
const WMain = ctx.theCanvas.width;
const HMain = ctx.theCanvas.height;

firstPicture.innerHTML = logoSelected;
otherElement.innerHTML = firstPicture.innerHTML;



/*function pour pousser les 4 images de la galerie selectionnée dans les "canvas" aléatoirement, le but est que l'emplacement dans le tableau soit non linéaire*/

const fourPictures = document.getElementsByClassName('canvas');
const ctxChild = document.querySelector('canvas').getContext('2d');
const WChild = ctx.canvas.width;
const HChild = ctx.canvas.height;

fourPictures.innerHTML = recognizerShow();
otherElement.innerHTML = fourPictures.innerHTML;


/*le click sur play permet de lancer les function et de projeter les images sur la page HTML*/


let play = document.getElementById('replay');
 
play.onclick = function () {
    console.log(logoSelected, arrayOfProposition)
};


/*let theGoodMatch = ... il faut changer la class pour qu'elle corresponde à la photo correspondante*/

