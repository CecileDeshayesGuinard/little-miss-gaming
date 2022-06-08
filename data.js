/* data.js regroupe toute la data du projet, il s'agit d'un tableau d'objects ayant 2 attributs. Chaque objet a son binome disposant du meme titre.
   Afin de créer 4 niveaux de recherche cohérents, j'intègre 4 sous galleries à ma gallerie principale...[]
   Comme pour le lab-memory-game, je préfère une présentation d'objet sur une ligne car lle m'est plus lisible
   Attention : les images sont appelées avec = nom du dossier: 'nom de l'image' 
   
*/

let trotro;
let pepaPig;
let iceAge;
let mysteryCard = "carteMystère.png";

trotro = [
  /*premier tableau d'objet*/
  { title: "trotroCirque", image: "trotroLogo.png", backImage: "trotroDosCarte.png"},
  { title: "trotroCirque", image: "trotroLogo.png", backImage: "trotroDosCarte.png"},
  { title: "trotroAccordeon", image: "trotroAccordeon.png", backImage: "trotroDosCarte.png"},
  { title: "trotroAccordeon", image: "trotroAccordeon.png", backImage: "trotroDosCarte.png"},
  { title: "trotroCamion", image: "trotroCamion.png", backImage: "trotroDosCarte.png"},
  { title: "trotroCamion", image: "trotroCamion.png", backImage: "trotroDosCarte.png"},
  { title: "trotroDoudou", image: "trotroDoudou.png", backImage: "trotroDosCarte.png"},
  { title: "trotroDoudou", image: "trotroDoudou.png", backImage: "trotroDosCarte.png"},
  { title: "trotroSki", image: "trotroSki.png", backImage: "trotroDosCarte.png"},
  { title: "trotroSki", image: "trotroSki.png", backImage: "trotroDosCarte.png"},
  { title: "trotroPatin", image: "trotroPatin.png", backImage: "trotroDosCarte.png"},
  { title: "trotroPatin", image: "trotroPatin.png", backImage: "trotroDosCarte.png"},
  { title: "trotroRoller", image: "trotroRoller.png", backImage: "trotroDosCarte.png"},
  { title: "trotroRoller", image: "trotroRoller.png", backImage: "trotroDosCarte.png"},
  { title: "trotroZaza", image: "trotroZaza.png", backImage: "trotroDosCarte.png"},
  { title: "trotroZaza", image: "trotroZaza.png", backImage: "trotroDosCarte.png"},
];

pepaPig = [
  /*deuxième tableau d'objet*/
  { title: "peppaPigBrown", image: "peppaPigBrown.png", backImage: "peppaPigDosCarte.png"},
  { title: "peppaPigBrown", image: "peppaPigBrown.png", backImage: "peppaPigDosCarte.png"},
  { title: "peppaPigDog", image: "peppaPigDog.png", backImage: "peppaPigDosCarte.png"},
  { title: "peppaPigDog", image: "peppaPigDog.png", backImage: "peppaPigDosCarte.png"},
  { title: "peppaPigChat", image: "peppaPigChat.png", backImage: "peppaPigDosCarte.png"},
  { title: "peppaPigChat", image: "peppaPigChat.png", backImage: "peppaPigDosCarte.png"},
  { title: "peppaPigElephant", image: "peppaPigElephant.png", backImage: "peppaPigDosCarte.png"},
  { title: "peppaPigElephant", image: "peppaPigElephant.png", backImage: "peppaPigDosCarte.png"},
  { title: "peppaPigMamy", image: "peppaPigMamy.png", backImage: "peppaPigDosCarte.png"},
  { title: "peppaPigMamy", image: "peppaPigMamy.png", backImage: "peppaPigDosCarte.png"},
  { title: "peppaPigVelo", image: "peppaPigVelo.png", backImage: "peppaPigDosCarte.png"},
  { title: "peppaPigVelo", image: "peppaPigVelo.png", backImage: "peppaPigDosCarte.png"},
  { title: "peppaPigMaman", image: "peppaPigMaman.png", backImage: "peppaPigDosCarte.png"},
  { title: "peppaPigMaman", image: "peppaPigMaman.png", backImage: "peppaPigDosCarte.png"},
  { title: "peppaPigPrincesse", image: "peppaPigPrincesse.png", backImage: "peppaPigDosCarte.png"},
  { title: "peppaPigPrincesse", image: "peppaPigPrincesse.png", backImage: "peppaPigDosCarte.png"},
];

iceAge = [
  /*troisième tableau d'objet*/
  { title: "bambi", image: "bambi.png", backImage: "bambiDosCarte.png"},
  { title: "bambi", image: "bambi.png", backImage: "bambiDosCarte.png"},
  { title: "bambiGroup", image: "bambiGroup.png", backImage: "bambiDosCarte.png"},
  { title: "bambiGroup", image: "bambiGroup.png", backImage: "bambiDosCarte.png"},
  { title: "bambiHibou", image: "bambiHibou.png", backImage: "bambiDosCarte.png"},
  { title: "bambiHibou", image: "bambiHibou.png", backImage: "bambiDosCarte.png"},
  { title: "bambiMaman", image: "bambiMaman.png", backImage: "bambiDosCarte.png"},
  { title: "bambiMaman", image: "bambiMaman.png", backImage: "bambiDosCarte.png"},
  { title: "bambiPanpan", image: "bambiPanpan.png", backImage: "bambiDosCarte.png"},
  { title: "bambiPanpan", image: "bambiPanpan.png", backImage: "bambiDosCarte.png"},
  { title: "bambiPapa", image: "bambiPapa.png", backImage: "bambiDosCarte.png"},
  { title: "bambiPapa", image: "bambiPapa.png", backImage: "bambiDosCarte.png"},
  { title: "bambiRatonLaveur", image: "bambiRatonLaveur.png", backImage: "bambiDosCarte.png"},
  { title: "bambiRatonLaveur", image: "bambiRatonLaveur.png", backImage: "bambiDosCarte.png"},
  { title: "bambiPapillon", image: "bambiPapillon.png", backImage: "bambiDosCarte.png"},
  { title: "bambiPapillon", image: "bambiPapillon.png", backImage: "bambiDosCarte.png"},
];

const gallery = [trotro, peppaPig, bambi];