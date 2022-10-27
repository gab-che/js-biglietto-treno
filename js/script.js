// informazioni che già conosco
const price = 0.21;
const discountYoung = 0.8;
const discountOld = 0.6;

// chiedo i km + li salvo in una variabile
let userKm = parseInt(prompt("Quanti km devi fare?"));

if (isNaN(userKm)){
    userKm = parseInt(prompt("Inserisci un numero valido"));
}

// chiedo l'età + metto in una variabile
let userAge = parseInt(prompt("Quanti anni hai?"));

if (isNaN(userAge)){
    userAge = parseInt(prompt("Inserisci un numero valido"));
}

// diversi alert a seconda dell'età
if (userAge < 18){
    // se minorenne sconto del 20% (* 0.8)
    alert (Math.floor(userKm * price * discountYoung).toFixed(2));

} else if( userAge >= 65){
    // se maggiore di 65 sconto del 40% (* 0.6)
    alert (Math.floor(userKm * price * discountOld).toFixed(2));

} else{
    // altrimenti prezzo pieno
    alert (Math.floor(userKm * price).toFixed(2));
}