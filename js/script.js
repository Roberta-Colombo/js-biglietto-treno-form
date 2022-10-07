const button = document.getElementById('invia');

const calcoloPrezzo = function() {
    let km = document.getElementById('km').value; 
    let eta = document.getElementById('eta').value;
    // console.log(km);
    // console.log(eta);

    let prezzoTotale = 0.21 * km;
// console.log(prezzoTotale);

    let scontoMinorenni = (prezzoTotale * 20) / 100;
// console.log(scontoMinorenni);

    let prezzoMinorenni = prezzoTotale - scontoMinorenni;
// console.log(prezzoMinorenni);

    let scontoOver65 = (prezzoTotale * 40) / 100;
// console.log(scontoOver65);

    let prezzoOver65 = prezzoTotale - scontoOver65;
// console.log(prezzoOver65);

    if(eta < 18){
        prezzoTotale = prezzoMinorenni.toFixed(2);
        console.log(prezzoTotale);
        console.log("Sconto del 20%");
    } else if (eta > 65){
        prezzoTotale = prezzoOver65.toFixed(2);
        console.log(prezzoTotale);
        console.log("Sconto over 65");
    } else {
        prezzoTotale = prezzoTotale.toFixed(2);
        console.log(prezzoTotale);
        console.log("Prezzo pieno");
    }
}

button.addEventListener('click', calcoloPrezzo);

//     const pPrezzoFinale = document.getElementById("prezzo-finale");
// pPrezzoFinale.innerText = prezzoUmano + " " + "euro";






/* const km = prompt("Quanti km devi percorrere?");

const eta = prompt("Qual è la tua età?");

console.log(km);
console.log(eta);

if(isNaN(km) || isNaN(eta)){
    alert("Inserire cifre");
}

let prezzoTotale = 0.21 * km;
console.log(prezzoTotale);

let scontoMinorenni = (prezzoTotale * 20) / 100;
console.log(scontoMinorenni);

let prezzoMinorenni = prezzoTotale - scontoMinorenni;
console.log(prezzoMinorenni);

let scontoOver65 = (prezzoTotale * 40) / 100;
console.log(scontoOver65);

let prezzoOver65 = prezzoTotale - scontoOver65;
console.log(prezzoOver65);

if(eta < 18){
    prezzoTotale = prezzoMinorenni;
    console.log("Sconto del 20%");
} else if (eta > 65){
    prezzoTotale = prezzoOver65;
    console.log("Sconto over 65");
} else {
    prezzoTotale;
    console.log("Prezzo pieno");
}

let prezzoUmano = prezzoTotale.toFixed(2); 

const pPrezzoFinale = document.getElementById("prezzo-finale");
pPrezzoFinale.innerText = prezzoUmano + " " + "euro";

// EXTRA per STAMPA BIGLIETTO

const from = prompt("Da quale città parti?");
console.log(from);

const to = prompt("Qual è la città di arrivo?");
console.log(to);

const bigliettoFrom = document.getElementById("from");
bigliettoFrom.innerText = from;

const bigliettoTo = document.getElementById("to");
bigliettoTo.innerText = to;

const bigliettoMinori = document.getElementById("sconto-minori");

const bigliettoOver65 = document.getElementById("sconto-over65");

const bigliettoPrezzoPieno = document.getElementById("prezzo-pieno");

if(eta < 18){
    bigliettoMinori.innerText = "sconto del 20%";
} else if (eta > 65){
    bigliettoOver65.innerText = "sconto del 40%";
} else {
    bigliettoPrezzoPieno.innerText = "prezzo pieno";
} */


