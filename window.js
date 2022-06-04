/* le click sur play permet de lancer les functions et de projeter les images sur la page HTML pour le premier test */

window.addEventListener('load'), (event) => {
  let play = document.getElementById('play');
 
  play.onclick = function () {
    console.log(arrayShuffled ,pictures)
  };

  let picture = pictureProjection();
  title = titleProjection;

  picture = document.getElementsByTagName('img');
  let html = undefined;


 /* maintenant nous cliquons sur la première carte et la retournons */
  
 
  picture.onclick = function (img) {
    arraySelected.picture.forEach((img) => {
    html += 
      `
       <td><img class="turned" width="auto" height="110" src="${picture}" alt="${title}"></img></td>
      `
     });
    };

    document.querySelector('#options.tr.td.img').innerHTML = html;
  
    setTimeout(() => {
    document.querySelectorAll('img').forEach((img) => {
      picture.addEventListener('click') (() => {  

        if (picture1 === undefined)  {
          return titleSelector() && picture.classList.remove("turned")
        } else {
          return titleCompare() && pairsValidation() && blockPairs() && gameOver() && otherGame()
        }
      });
    });
  },2000);
};
