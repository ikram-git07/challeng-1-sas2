//Si les deux valeurs sont identiques, le programme doit renvoyer le triple de leur somme.
const prompt = require("prompt-sync")();
const nbr1 = Number(prompt(`entrez un nombre entier `));
const nbr2 = Number(prompt(`entrez un nombre entier `));
const tripl = 0;
if (nbr1 === nbr2 ){
     tripl = (nbr1 + nbr2) * 3;
}
    console.log (`la somme est ${tripl} `);


    

 

