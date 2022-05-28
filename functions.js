
/*function destinées au tri aléatoire de data.js*/

const gallerySelector () => { /*une galerie est choisie au hasard*/
    return Math.floor(Math.random() * galleries.length);
};

const objectSelector () => { /*un titre est choisit au hasard dans la galerie selectionnée*/
    return Math.floor(Math.random() * gallerySelector.title.length);
}

const logoSelector () => { /*l'image "identifier" est choisit en fonction du titre sélectionné*/
    return objectSelector.identifier;
}

/*const listSelector() => {
    return 
    for (let i = 0; i<= gallerySelector.length; i++) {
        if (Math.floor(Math.random() * gallerySelector.recognizer === ))
            /*liste des 4 images possibles en faisant attention de ne pas prendre deux fois la même
}*/

//in progress...


/*function pour pousser l'image du titre selectionné dans l'id "theCanvas"*/


const ctxMain = document.querySelector('Thecanvas').getContext('2d');
const WMain = ctx.theCanvas.width;
const HMain = ctx.theCanvas.height;

//in progress...



/*function pour pousser les 4 images de la galerie selectionnée dans les "canvas" aléatoirement, le but est que l'emplacement dans le tableau soit non linéaire*/


const ctxChild = document.querySelector('Thecanvas').getContext('2d');
const WChild = ctx.canvas.width;
const HChild = ctx.canvas.height;

//in progress...