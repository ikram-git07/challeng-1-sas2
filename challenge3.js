//Écrivez un programme qui demande la distance en kilomètres et la transforme en yards.
const prompt = require("prompt-sync")();
let Km = Number (prompt ("donner la distance en km "));
let yards = Km * 1093.61;
console.log ( yards );

