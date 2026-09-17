//Écrivez un programme qui demande la température en Celsius et la transforme en Kelvin.
const prompt = require("prompt-sync")();
let temp = Number (prompt ("donner la temp en celsieus "));
let kelvin = temp + 273.15;
console.log( kelvin );




