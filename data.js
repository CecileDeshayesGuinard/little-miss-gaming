/* data.js regroupe toute la data du projet, il s'agit d'un tableau d'objects ayant 2 attributs. Chaque objet a son binome disposant du meme titre.
   Afin de créer 4 niveaux de recherche cohérent, j'intègre 4 sous galleries à ma gallerie principale...[]
   Comme pour le lab-memory-game, je préfère une présentation d'objet sur une ligne car lle m'est plus lisible
   Attention : les images sont appelées avec = nom du dossier: 'nom de l'image' */

const kidsGallery1 = ''; /* je déclacre les variables des sous-galleries au début car CS code m'informe que la déclaration dans l'array principale est une erreur */
const kidsGallery2 = '';
const kidsGallery3 = '';
const kidsGallery4 = '';


const gallery = [

  kidsGallery1 = [ /*premier tableau d'objet*/
    {title: 'Robocar Poli', images: 'robocarPoliLogo.jpg'},
    {title: 'Robocar Poli', images: 'robocarPoli.jpg'},
    {title: 'Trotro', images: 'trotroLogo.png'},
    {title: 'Trotro', images: 'trotro.png'},
    {title: 'Oui Oui', images: 'ouiOuiLogo.png'},
    {title: 'Oui Oui', images: 'ouiOui.png'},
    {title: 'Peppa Pig', images: 'peppaPigLogo.png'},
    {title: 'Peppa Pig', images: 'peppaPig.png'},
  ],

  kidsGallery2 = [ /*deuxième tableau d'objet*/
    {title: 'Baby Boss', images: 'babyBossLogo.png'},
    {title: 'Baby Boss', images: 'babyBoss.png'},
    {title: 'Calimero', images: 'calimeroLogo.png'},
    {title: 'Calimero', images: 'calimero.png'},
    {title: 'Raiponce', images: 'raiponceLogo.png'},
    {title: 'Raiponce', images: 'raiponce.png'},
    {title: 'Reine des Neiges', images: 'reineDesNeigesLogo.png'},
    {title: 'Reine des Naiges', images: 'reineDesNeiges.png'},
  ],

  kidsGallery3 = [ /*troisième tableau d'objet*/
    {title: 'Franklin', images: 'franklinLogo.png'},
    {title: 'Franklin', images: 'franklin.png'},
    {title: 'Vaiana', images: 'vaianaLogo.png'},
    {title: 'Vaiana', images: 'vaiana.png'},
    {title: 'Shrek', images: 'shrekLogo.png'},
    {title: 'Shrek', images: 'shrek.png'},
    {title: 'M&M', images: 'M&MLogo.png'},
    {title: 'M&M', images: 'M&M.png'},
  ],

  kidsGallery4 = [ /*quatrième tableau d'objet*/
    {title: 'Ballon', images: 'ballonLogo.png'},
    {title: 'Ballon', images: 'ballon.png'},
    {title: 'Pomme', images: 'pommeLogo.png'},
    {title: 'Pomme', images: 'pomme.png'},
  
    {title: 'Avion', images: 'avionLogo.png'},
    {title: 'Avion', images: 'avion.png'},
  
    {title: 'Chat', images: 'chatLogo.png'},
    {title: 'Chat', images: 'chat.png'},
  ]
];