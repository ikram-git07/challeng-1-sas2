//Écrivez un programme qui demande la vitesse en kilomètres par heure (km/h) et la transforme en mètres par seconde (m/s).
const prompt = require("prompt-sync")();
let vts = Number(prompt("entrez la vitesse en km"));
let ms = vts * 0.27778;
console.log ( ms ); 

