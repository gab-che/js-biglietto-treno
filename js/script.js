// chiedo i km + li salvo in una variabile
const userKm = parseInt(prompt("Quanti km devi fare?"));

if (isNaN(userKm)){
    prompt("Inserisci un numero valido");
}

// chiedo l'età + metto in una variabile
const userAge = parseInt(prompt("Quanti anni hai?"));

if (isNaN(userAge)){
    prompt("Inserisci un numero valido");
}

// diversi alert a seconda dell'età
if (userAge < 18){
    // se minorenne sconto del 20% (* 0.8)
    alert(userKm * 0.21 * 0.8);

} else if( userAge >= 65){
    // se maggiore di 65 sconto del 40% (* 0.6)
    alert(userKm * 0.21 * 0.6);

} else{
    // altrimenti prezzo pieno
    alert(userKm * 0.21)
}