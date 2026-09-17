//Écrivez un programme qui demande un nombre et affiche si ce nombre est pair ou impair.
const prompt = require("prompt-sync")();
let nbr = Number (prompt("entrez un nombre"));
if ( nbr % 2 === 0 ){
    console.log ('le nombre ${nbr} est pair.');
}else 
{ console.log ('le nombre ${nbr} est impaire.');
}
