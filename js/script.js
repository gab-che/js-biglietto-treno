// informazioni che già conosco
const price = 0.21;
const discountYoung = 0.8;
const discountOld = 0.6;

// riferimento html
const priceTag = document.getElementById("pricetag");
const disCount = document.getElementById("discount");

// chiedo i km + li salvo in una variabile
let userKm = parseInt(prompt("Quanti km devi fare?"));


while (isNaN(userKm)){
    userKm = parseInt(prompt("Inserisci un numero valido"));
}

// chiedo l'età + metto in una variabile
let userAge = parseInt(prompt("Quanti anni hai?"));

while (isNaN(userAge)){
    userAge = parseInt(prompt("Inserisci un numero valido"));
}

// diversi alert a seconda dell'età
if (userAge < 18){
    // se minorenne sconto del 20% (* 0.8)
    priceTag.innerHTML = (userKm * price * discountYoung).toFixed(2);
    disCount.innerHTML = "20%"

} else if( userAge >= 65){
    // se maggiore di 65 sconto del 40% (* 0.6)
    priceTag.innerHTML = (userKm * price * discountOld).toFixed(2);
    disCount.innerHTML = "40%";

} else{
    // altrimenti prezzo pieno
    priceTag.innerHTML = (userKm * price).toFixed(2);
}


//------ altre info ---------
const userName = document.getElementById("name");
userName.innerHTML = prompt("Inserisci il tuo nome completo: ");

const fullPrice = document.getElementById("fullprice");
fullPrice.innerHTML = (userKm * price).toFixed(2);