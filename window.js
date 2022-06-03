/* le click sur play permet de lancer les functions et de projeter les images sur la page HTML pour le premier test */

window.addEventListener('load'), (event) => {
  let play = document.getElementById('play');
 
  play.onclick = function () {
    console.log(arrayShuffled ,pictures)
  };
};

/* maintenant nous cliquons sur la première carte et la retournons */

picture = pictureProjection;
title = titleProjection;

window.addEventListener('turn'), (event) => {
  let picture = document.getElementsByTagName('img');
  let html = undefined;
 
  picture.onclick = function () {
    arraySelected.picture.forEach(() => {
    html += `

    <tr>
      <td><img class="turned" width="auto" height="110" src="${picture}" alt="${title}"></img></td>
    </tr>
     `
    });
  };
};