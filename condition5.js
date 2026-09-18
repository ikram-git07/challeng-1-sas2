//Écrivez un programme JavaScript piloté par menu pour convertir une année donnée en :
//Mois
//Jours
//Heures
//Minutes
//Secondes
const prompt = require ("prompt-sync")();
const annee = Number (prompt("entrez le nombre des annees"));
 console.log ("menu");
 console.log ("1- Mois");
 console.log ("2- Jours");
 console.log ("3- Heures");
 console.log ("4- Minutes");
 console.log ("5- Secondes");
 const choix = Number (prompt("entrez ton choix"));
switch(choix){
    case 1:
        console.log("un anne par mois :" + annee*12);break;
    case 2:
        console.log("un anne par jour :" + annee*365);break;
    case 3:
        console.log("un anne par heure :" + annee*365*24);break;
    case 4:
        console.log("un anne par minute :" + annee*365*24*60);break;
    case 5:
        console.log("un anne par aeconde :" + annee*365*24*60*60);break; 
    default:
          console.log("error");
}
