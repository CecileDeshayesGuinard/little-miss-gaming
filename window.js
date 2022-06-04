/* le click sur play permet de lancer les functions et de projeter les images sur la page HTML pour le premier test */


window.addEventListener('load'), (event) => { 
  let play = document.getElementById('play'); // on créer une variable play dont l'activation n'intervient que si l'on clique sur l'élément HTML disposant de l'id "play"
 
  play.onclick = function () {
    console.log(backPictures) // au click on affiche les images mélangées coté back
  };


  backPictures = document.getElementsByTagName('img'); // nous lions les backImages avec la balise img dans notre HTML
  let html = undefined; // garder undefined et non les quotes car les quotes induisent automtiquement que la valeur sera une string



 /* maintenant nous cliquons sur la première carte et la retournons */
  
 
  backPictures.onclick = function (img) { // je veux rajouter sur chaque image de dos cliquée la class "turned" et mettre l'image de face en gardant le titre
    arraySelected.backPictures.forEach((img) => {
    html += 
      `
       <td><img class="turned" width="auto" height="110" src="${image}" alt="${title}"></img></td>
      `
     });
    };

    let allImages = document.querySelector('img').innerHTML = html;
  
    setTimeout(() => {
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
};

/* comment console(log) tout ça ?
   ai-je des problème dans l'iteration des functions et des étapes ?
   fichiers : window / functions
   data.js semble bon
*/
