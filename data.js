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
  { title: "papaPig", images: "papaPig.png", backImage: "pepaPigDosCarte.png"},
  { title: "papaPig", images: "papaPig.png", backImage: "pepaPigDosCarte.png"},
  { title: "ballon", images: "pepaPigBallon.png", backImage: "pepaPigDosCarte.png"},
  { title: "ballon", images: "pepaPigBallon.png", backImage: "pepaPigDosCarte.png"},
  { title: "chat", images: "pepaPigChat.png", backImage: "pepaPigDosCarte.png"},
  { title: "chat", images: "pepaPigChat.png", backImage: "pepaPigDosCarte.png"},
  { title: "dino", images: "pepaPigDino.png", backImage: "pepaPigDosCarte.png"},
  { title: "dino", images: "pepaPigDino.png", backImage: "pepaPigDosCarte.png"},
  { title: "elephant", images: "pepaPigElephant.jpg", backImage: "pepaPigDosCarte.png"},
  { title: "elephant", images: "pepaPigElephant.jpg", backImage: "pepaPigDosCarte.png"},
  { title: "pepaPigLogo", images: "pepaPigLogo.jpg", backImage: "pepaPigDosCarte.png"},
  { title: "pepaPigLogo", images: "pepaPigLogo.jpg", backImage: "pepaPigDosCarte.png"},
  { title: "maman", images: "pepaPigMaman.png", backImage: "pepaPigDosCarte.png"},
  { title: "maman", images: "pepaPigMaman.png", backImage: "pepaPigDosCarte.png"},
  { title: "reine", images: "pepaPigReine.jpg", backImage: "pepaPigDosCarte.png"},
  { title: "reine", images: "pepaPigReine.jpg", backImage: "pepaPigDosCarte.png"},
];

iceAge = [
  /*troisième tableau d'objet*/
  { title: "Buck", images: "IceAgeBuck.png", backImage: "iceAgeDosCarte.png"},
  { title: "Buck", images: "IceAgeBuck.png", backImage: "iceAgeDosCarte.png"},
  { title: "Crash", images: "IceAgeCrash.png", backImage: "iceAgeDosCarte.png"},
  { title: "Crash", images: "IceAgeCrash.png", backImage: "iceAgeDosCarte.png"},
  { title: "Diego", images: "IceAgeDiego.png", backImage: "iceAgeDosCarte.png"},
  { title: "Diego", images: "IceAgeDiego.png", backImage: "iceAgeDosCarte.png"},
  { title: "Mani", images: "IceAgeMani.png", backImage: "iceAgeDosCarte.png"},
  { title: "Mani", images: "IceAgeMani.png", backImage: "iceAgeDosCarte.png"},
  { title: "Peach", images: "IceAgePeach.png", backImage: "iceAgeDosCarte.png"},
  { title: "Peach", images: "IceAgePeach.png", backImage: "iceAgeDosCarte.png"},
  { title: "Rex", images: "IceAgeRex.png", backImage: "iceAgeDosCarte.png"},
  { title: "Rex", images: "IceAgeRex.png", backImage: "iceAgeDosCarte.png"},
  { title: "Scrat", images: "IceAgeScrat.png", backImage: "iceAgeDosCarte.png"},
  { title: "Scrat", images: "IceAgeScrat.png", backImage: "iceAgeDosCarte.png"},
  { title: "Sid", images: "IceAgeSid.png", backImage: "iceAgeDosCarte.png"},
  { title: "Sid", images: "IceAgeSid.png" , backImage: "iceAgeDosCarte.png"},
];

const gallery = [trotro, pepaPig, iceAge];