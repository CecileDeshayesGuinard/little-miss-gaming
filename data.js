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
  { title: "papaPig", image: "papaPig.png", backImage: "pepaPigDosCarte.png"},
  { title: "papaPig", image: "papaPig.png", backImage: "pepaPigDosCarte.png"},
  { title: "ballon", image: "pepaPigBallon.png", backImage: "pepaPigDosCarte.png"},
  { title: "ballon", image: "pepaPigBallon.png", backImage: "pepaPigDosCarte.png"},
  { title: "chat", image: "pepaPigChat.png", backImage: "pepaPigDosCarte.png"},
  { title: "chat", image: "pepaPigChat.png", backImage: "pepaPigDosCarte.png"},
  { title: "dino", image: "pepaPigDino.png", backImage: "pepaPigDosCarte.png"},
  { title: "dino", image: "pepaPigDino.png", backImage: "pepaPigDosCarte.png"},
  { title: "elephant", image: "pepaPigElephant.jpg", backImage: "pepaPigDosCarte.png"},
  { title: "elephant", image: "pepaPigElephant.jpg", backImage: "pepaPigDosCarte.png"},
  { title: "pepaPigLogo", image: "pepaPigLogo.jpg", backImage: "pepaPigDosCarte.png"},
  { title: "pepaPigLogo", image: "pepaPigLogo.jpg", backImage: "pepaPigDosCarte.png"},
  { title: "maman", image: "pepaPigMaman.png", backImage: "pepaPigDosCarte.png"},
  { title: "maman", image: "pepaPigMaman.png", backImage: "pepaPigDosCarte.png"},
  { title: "reine", image: "pepaPigReine.jpg", backImage: "pepaPigDosCarte.png"},
  { title: "reine", image: "pepaPigReine.jpg", backImage: "pepaPigDosCarte.png"},
];

iceAge = [
  /*troisième tableau d'objet*/
  { title: "Buck", image: "IceAgeBuck.png", backImage: "iceAgeDosCarte.png"},
  { title: "Buck", image: "IceAgeBuck.png", backImage: "iceAgeDosCarte.png"},
  { title: "Crash", image: "IceAgeCrash.png", backImage: "iceAgeDosCarte.png"},
  { title: "Crash", image: "IceAgeCrash.png", backImage: "iceAgeDosCarte.png"},
  { title: "Diego", image: "IceAgeDiego.png", backImage: "iceAgeDosCarte.png"},
  { title: "Diego", image: "IceAgeDiego.png", backImage: "iceAgeDosCarte.png"},
  { title: "Mani", image: "IceAgeMani.png", backImage: "iceAgeDosCarte.png"},
  { title: "Mani", image: "IceAgeMani.png", backImage: "iceAgeDosCarte.png"},
  { title: "Peach", image: "IceAgePeach.png", backImage: "iceAgeDosCarte.png"},
  { title: "Peach", image: "IceAgePeach.png", backImage: "iceAgeDosCarte.png"},
  { title: "Rex", image: "IceAgeRex.png", backImage: "iceAgeDosCarte.png"},
  { title: "Rex", image: "IceAgeRex.png", backImage: "iceAgeDosCarte.png"},
  { title: "Scrat", image: "IceAgeScrat.png", backImage: "iceAgeDosCarte.png"},
  { title: "Scrat", image: "IceAgeScrat.png", backImage: "iceAgeDosCarte.png"},
  { title: "Sid", image: "IceAgeSid.png", backImage: "iceAgeDosCarte.png"},
  { title: "Sid", image: "IceAgeSid.png" , backImage: "iceAgeDosCarte.png"},
];

const gallery = [trotro, pepaPig, iceAge];