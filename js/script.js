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

    const messaggio = "Tariffa applicata: ";
    const importo = "Il tuo importo finale: "

    const pPrezzoFinaleMinorenni = document.getElementById("prezzoFinale-minorenni");

    const pPrezzoFinaleOver65 = document.getElementById("prezzoFinale-over65");

    const pPrezzoFinalePieno = document.getElementById("prezzoFinale-pieno");

    if(eta < 18){
        prezzoTotale = prezzoMinorenni.toFixed(2);
        // console.log(prezzoTotale);
        // console.log("Sconto del 20%");

        const bgPrezzo18 = "<span class='bg-red'>" + prezzoMinorenni.toFixed(2) + " " + "euro<br>" + "</span>";
        
        pPrezzoFinaleMinorenni.innerHTML = importo + bgPrezzo18 +
        messaggio + "<strong>sconto del 20%</strong>";


    } else if (eta > 65){
        prezzoTotale = prezzoOver65.toFixed(2);
        // console.log(prezzoTotale);
        // console.log("Sconto over 65");

        const bgPrezzo65 = "<span class='bg-red'>" + prezzoOver65.toFixed(2) + " " + "euro<br>" + "</span>";
        
        pPrezzoFinaleOver65.innerHTML = importo + bgPrezzo65 +
        messaggio + "<strong>sconto del 40%</strong>";

    } else {
        prezzoTotale.toFixed(2);
        // console.log(prezzoTotale);
        // console.log("Prezzo pieno");

        const bgPrezzo = "<span class='bg-red'>" + prezzoTotale.toFixed(2) + " " + "euro<br>" + "</span>";
        
        pPrezzoFinalePieno.innerHTML = importo + bgPrezzo +
        messaggio + "<strong>prezzo pieno</strong>";
    }

    const buonviaggio = document.getElementById("buon-viaggio");
    buonviaggio.innerHTML = "Buon viaggio con Treniboolean! <span class='text-red'>&hearts;</span>";
}

button.addEventListener('click', calcoloPrezzo);

const modalBg = document.querySelector('.modal-bg');
// console.log(modalBg);
const trigger = document.getElementById('trigger');
// console.log(trigger);
const close = document.getElementById('close');
// console.log(close);


const toggleModal = function() {
    modalBg.classList.toggle('show-modal');
    console.log(toggleModal);
}

trigger.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal); 

const giorno = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"];

const mese = ["gennaio", "febbraio", "marzo", "aprile", "maggio", "giugno", "luglio", "agosto", "settembre", "ottobre", "novembre", "dicembre"];

const d = new Date();
let day = giorno[d.getDay()];
// console.log(day);
let date = d.getDate();
// console.log(date);
let month = mese [d.getMonth()];
// console.log(month);
let year = d.getFullYear();
// console.log(year);

const dataOdierna = day + ' ' + date + ' ' + month + ' ' + year + ',';

const spanDataOdierna = document.getElementById('data-odierna');
spanDataOdierna.innerHTML = dataOdierna;

