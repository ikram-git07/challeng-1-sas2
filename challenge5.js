//Écrivez un programme qui demande la température en Celsius et affiche l'état de l'eau à cette température (solide, liquide, gaz).
const prompt = require("prompt-sync")();
const temp = Number (prompt("entrez la température en Celsius"));
if (temp  < 0  ) {
    console.log ("solide")
} else if (temp < 100) {
    console.log ("liquide")
} else {
    console.log ("gaz")
}