# -BAROINI-_-BENDJADE-ECF202012_1

EVAL#1 - DEC 2020
#################README


-Le HEADER comporte le nom du site (qui fait office de logo), une barre de recherche, un bouton Spotify, un bouton Deezer ainsi qu'un bouton 'Mes favoris' représenté avec une icône étoile.

-Le FOOTER comporte la meme liste que dans le modèle, à savoir:  "A PROPOS","SUPPORT", "PARTENAIRES", "LIENS", "CONTACT" et j'ai rajouté une rubrique "Mon compte".

Ces deux éléments sont présents à l'identique sur toute les pages du site.


                                            PAGE D'ACCUEIL
La page d'accueil contient le header, footer, et entre les deux en début de page la rubrique "Les artistes" qui comporte 8 images d'artistes sur lesquel nous sommes censé pouvoir cliquer dessus pour accéder à leur biographie et leur musique, ainsi qu'une image qui permet une fois cliqué dessus, de voir la suite des propositions d'artistes.

Suivi de la rubrique "Mes recherches récentes" qui comporte un historique d'artistes qui a été recherché par l'utilisateur et les 5 pochettes d'albums des musiques écoutés.

Il y a ensuite une phrase destiné au client courte et simple, puis les logos des réseaux sociaux sur lesquels est MyMusic: Instagram et Twitter.  

                                           PAGE D'ARTISTE
La page d'artiste comporte aussi le header et footer. En début de page, un <h2> qui fait office de titre de page.
Puis s'en suit une image de l'artiste ainsi que son nom, et une brève biographie. La liste de ses concerts à venir est aussi présent.

Puis en bas il y a un extrait vidéo de l'artiste en question, ainsi que des images d'autres artistes en proposition, ainsi que des extraits de leurs musique.

Enfin, les logos des réseaux sociaux en bas de page.



////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


                                         ***Accéder à la page d'accueil***:
 -depuis n'importe quel page, cliquer sur le logo 'My Music ©' présent en haut de page dans le header.
 
  
                                          ***Accéder à la page Bbis***:
 -sur la page d'accueil, il suffit de cliquer sur 'Youv Dee' écrit en
 tant que noms d'artistes sur la rubrique "mes recherches récentes" pour accéder à la page A . 
 
 -Autre solution: une fois sur la page Abis, il suffit de cliquer sur 'Youv Dee' ou 
 l'image qui correspond à l'artiste YouvDee en bas de page à la rubrique 'Mes artistes'.
 
 
                                          ***Accéder à la page A***:
 -sur la page d'accueil, il faut cliquer sur l'image de l'artiste Dua Lipa, la 3e artiste en partant de la gauche.
 
 Les pages artistes Abis et Bbis auquel vous accédez ont été réalisé dans le but de pouvoir tenir sur le téléphone.
 
 ------------     --------------------     --------------------     -------------------------     
   
   Il y a d'autres page artiste C et D sur lesquel le mediaquery ne veux pas fonctionner, ce sont les premières pages que j'ai réalisé, mais j'ai pas réussi à les faire tenir sur le responsive telephone dans l'inspecteur.
             
             
                                             ***Accéder à la page C*** 
 -Depuis la page d'accueil, cliquez sur 'Dua Lipa' dans la liste des 
noms d'artistes dans la rubrique "Mes recherches récentes". Vous accèderez alors 
à la page C, qui est la page A d'origine, agencé différement.

                                             ***Accéder à la page D***
 -Depuis la page C, cliquez sur le nom d'artiste 'Youv Dee' ou sur l'image correspondante de l'artiste, 
présent en descendant la page, après la présentation de l'artiste Dua Lipa, dans
 la rubrique "Mes artistes"


/////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////




                                                                 09DEC2020
  
  
  
  
------1 MAQUETTAGE------
Après avoir lu les directives du cahier des charges, je me lances dans le maquettage des pages sur Figma. 

Il y aura 3 pages:

-Page d'accueil;
-Page "Mes artistes" n°1 avec présentation d'un artiste;
-Page "Mes artistes" n°2 avec présentation d'un autre artiste.
Du HTML, CSS, et du JavaScript (du scrollreveal pour une meilleure présentation esthétique)

J'ai décidé de maintenir le code couleur global du site original, mettre un tout petit peu au gout du jour, et réorganisé la disposition pour moderniser le site (dans la limite ce que qui est autorisé dans le cahier des charges).

Quant au nom des images et documents, j'ai choisi une convetion en camelCase.
-Figma modifiable.vers:
https://www.figma.com/file/7BuiR61IssTe8HqJs0Ij2s/Untitled?node-id=0%3A1

-Figma visual.vers: 
https://www.figma.com/proto/7BuiR61IssTe8HqJs0Ij2s/Untitled?node-id=3%3A0&scaling=min-zoom

(Maquette Figma dispo en png dans dossier 'maquette')

----2 CODAGE HTML INDEX------

Html commencé mais pas encore terminé

----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------

                                                               10DEC2020
                                   
J'ai aujourd'hui avancé dans le html et le css de la page d'accueil. J'ai dû recommencer le css parce que je m'étais trompé sur l'attributiion de flex et du grid, ce n'était pas responsive. 
Je me suis fait un indexBIS pour garder l'ancien (que je supprimerai plus tard) vu que j'avias bien avancé dessus, si jamais j'ai besoin de piocher des choses dedans.

J'ai ajouté du contenu a la page (images pochettes d'albums et d'artistes). Il me reste à mettre les choses de bonne taille et ajouter des détails (police, couleurs etc) .

------------------------------------------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------------------------------------------

                                                              11DEC2020    
                                                              

J'ai arrangé le html et ajouté certains éléments html pour finaliser au mieux la page et qu'elle soit prête pour les media queries que je veux ajouter, pour qu'elle soit responsive comme je le vois dans ma tête et comme je l'ai fait dans ma maquette.

J'ai découvert un problème par rapport au footer, il ne se collait pas en bas de page lorsque je mettais la page sous version téléphone ou ipad. Mais j'ai réussi à régler le problème, avec aussi la barre de recherche que j'ai réussi à paramétrer correctement: 
j'ai mis dans le css de 'body' width: 100% et height: 100% pour que l'affichage se répartisse de facon optimale et prenne toute la place qui lui est dispo.

J'ai réarrangé le css pour qu'il soit plus lisible à l'aide des commentaires que j'avais mis . 

J'ai bloqué sur le media query mais j'ai finalement réussi a faire ce que je voulais.
Je voulais que les images d'artistes et d'albums aillent à la ligne automatiquement lorsque la fenetre est trop réduite pour pouvoir les disposer à la ligne correctement. J'ai découvert 'wrap', une fontion en flex bien pratique !

En + du mediaquery j'y ai ajouté des :hover pour que ca rende la page web statique un peu plus vivante, interactive au minimum. Le :hover permets de faire interagir un élément spécifique du html qui s'affiche sur la page, au passage de la souris dessus.


Le html et css de la page d'accueil est pratiquement terminé, normalement je passerai a l'autre page à faire pour la suite.

-----------------------------------------------------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------
                                                                  13DEC2020
                                                                  
J'ai ajouté la page JS et mis en place un scrollreveal, c'est mieux visuelement je trouve. 
Donc j'ai pris le script du site https://scrollrevealjs.org/ et ai aussi fait une page script pour pouvoir appliquer ce scollreveal sur les éléments que je souhaite en les spécifiant. J'ai ajouté une propriété a la fonction 'reveal' qui s'appelle 'delay': ça permets de pouvoir définir un délai/compte à rebours sur l'affichage des éléments ciblés du html. 

J'attaque l'autre page càd la page présentation d'un artiste.

J'ai fait le html et commencé le css, le plan du site est pratiquement fait. 

----------------------------------------------------------------------------------------------------------------
---------------------------------------------------------------------------------------------------------------
                                                            14DEC2020
                                                            
J'ai fait la page présentation d'un artiste, mais j'ai un problème: le média query ne veut pas fonctionner à 100% je ne sais pas pourquoi. Sur chrome il semble ne pas fonctionner, mais sur Firefox il marche de temps en temps. J'essayerai de voir ce que je peux faire demain mais je vois pas trop ce que je peux faire, j'ai essayé tellement de choses. Peut etre qu c'est le bug que GoogleChrome a subi aujourd'hui qui fait ça, mais j'en suis pas sur.      

-----------------------------------------------------------------------------------------------------------------
----------------------------------------------------------------------------------------------------------------
                                                            15DEC2020
                                                            
  J'ai  pas réussi à résoudre le problème de l'inspecteur. J'ai finalisé la page A et page B, inséré des liens sur le titre en header pour pouvoir revenir sur la page d'accueil.
  J'ai placé des :hover comme sur les pages précédentes et un scrollreveal.
  
  J'ai aussi mis des liens sur la page d'accueil et sur les autres pages pour pouvoir aller sur les pages A et pages B
  
  
   -----------------------------------------------------------------------------------------------------------
 -------------------------------------------------------------------------------------------------------------
                                                            
                                                            16DEC2020
                                                            
 J'ai encore tenté énormément de choses pour rendre responsive correctement mes pages C et D (les pages artistA et artistB d'origine), j'ai meme recommencé les pages de zéro mais je n'ai pas réussi à trouver le problème.
  
 Du coup j'ai fait une autre page mais je l'ai fait pour qu'elle soit lisible et responsive sur telephone. Du coup le rendu sur écran ordinateur a l'air un peu grossier, et n'est pas celui que je voulais mais peut passer.
 
 J'ai réorganisé le css et les liens entre les pages
                                                           
