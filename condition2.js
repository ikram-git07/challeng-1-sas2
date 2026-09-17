const prompt = require("prompt-sync")();
const alph = prompt ("entrez une lettre alph");
switch (alph){
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "y":
console.log (`la lettre alph ${alph} est  un vouyelle `);
break;
default :
console.log (`la lettre alph ${alph} est pas un vouyelle `);
console.log("la lettre alph  " + alph  + " nest pas un vouyelle ")
}
