/* data.js regroupe toute la data du projet, il s'agit d'un tableau d'objects ayant 2 attributs. Chaque objet a son binome disposant du meme titre.
   Afin de créer 4 niveaux de recherche cohérents, j'intègre 4 sous galleries à ma gallerie principale...[]
   Comme pour le lab-memory-game, je préfère une présentation d'objet sur une ligne car lle m'est plus lisible
   Attention : les images sont appelées avec = nom du dossier: 'nom de l'image' 
   
*/

const trotro = undefined; /* je déclacre les variables des sous-galleries au début car CS code m'informe que la déclaration dans l'array principale est une erreur */
const pepaPig = undefined;
const iceAge = undefined;
const trotroCard = "trotroDosCarte.png";
const pepaPigCard = "pepaPigDino.png";
const iceAgeCard ="iceAgeDosCarte.png";
const mysteryCard = "carteMystère.png";

trotro = [
  /*premier tableau d'objet*/
  { title: "trotroCirque", images: "trotroLogo.png"},
  { title: "trotroCirque", images: "trotroLogo.png"},
  { title: "trotroAccordeon", images: "trotroAccordeon.png"},
  { title: "trotroAccordeon", images: "trotroAccordeon.png"},
  { title: "trotroCamion", images: "trotroCamion.png"},
  { title: "trotroCamion", images: "trotroCamion.png"},
  { title: "trotroDoudou", images: "trotroDoudou.png"},
  { title: "trotroDoudou", images: "trotroDoudou.png"},
  { title: "trotroSki", images: "trotroSki.png"},
  { title: "trotroSki", images: "trotroSki.png"},
  { title: "trotroPatin", images: "trotroPatin.png"},
  { title: "trotroPatin", images: "trotroPatin.png"},
  { title: "trotroRoller", images: "trotroRoller.png"},
  { title: "trotroRoller", images: "trotroRoller.png"},
  { title: "trotroZaza", images: "trotroZaza.png"},
  { title: "trotroZaza", images: "trotroZaza.png"},
];

pepaPig = [
  /*deuxième tableau d'objet*/
  { title: "papaPig", images: "papaPig.png" },
  { title: "papaPig", images: "papaPig.png" },
  { title: "ballon", images: "pepaPigBallon.png" },
  { title: "ballon", images: "pepaPigBallon.png" },
  { title: "chat", images: "pepaPigChat.png" },
  { title: "chat", images: "pepaPigChat.png" },
  { title: "dino", images: "pepaPigDino.png" },
  { title: "dino", images: "pepaPigDino.png" },
  { title: "elephant", images: "pepaPigElephant.jpg" },
  { title: "elephant", images: "pepaPigElephant.jpg" },
  { title: "pepaPigLogo", images: "pepaPigLogo.jpg" },
  { title: "pepaPigLogo", images: "pepaPigLogo.jpg" },
  { title: "maman", images: "pepaPigMaman.png" },
  { title: "maman", images: "pepaPigMaman.png" },
  { title: "reine", images: "pepaPigReine.jpg" },
  { title: "reine", images: "pepaPigReine.jpg" },
];

iceAge = [
  /*troisième tableau d'objet*/
  { title: "Buck", images: "IceAgeBuck.png" },
  { title: "Buck", images: "IceAgeBuck.png" },
  { title: "Crash", images: "IceAgeCrash.png" },
  { title: "Crash", images: "IceAgeCrash.png" },
  { title: "Diego", images: "IceAgeDiego.png" },
  { title: "Diego", images: "IceAgeDiego.png" },
  { title: "Mani", images: "IceAgeMani.png" },
  { title: "Mani", images: "IceAgeMani.png" },
  { title: "Peach", images: "IceAgePeach.png" },
  { title: "Peach", images: "IceAgePeach.png" },
  { title: "Rex", images: "IceAgeRex.png" },
  { title: "Rex", images: "IceAgeRex.png" },
  { title: "Scrat", images: "IceAgeScrat.png" },
  { title: "Scrat", images: "IceAgeScrat.png" },
  { title: "Sid", images: "IceAgeSid.png" },
  { title: "Sid", images: "IceAgeSid.png" },
];

const gallery = [trotro, pepaPig, iceAge];