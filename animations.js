const galleryPart = new GalleryPart(cards); // cette variable prend toujours les caractéristiques de la gallerie créée par le constructeur

window.addEventListener('load', (event) => {  // pour chaque chargement de page

  galleryPart.shuffleCards() // dès que la page recharge, un mélange des carte est effectué
  let html = undefined; // d'après mes recherches sur internet, il faudrait mettre undefined

  galleryPart.cards.forEach((cards) => { // on créer un code HTML qui sera poussé dans notre document
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  }); // "memoryGame.cards" fait appel à mon constructeur (donc à mon statut de démarrage)


});