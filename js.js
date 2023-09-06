const prompt = require("prompt-sync")();

const eka = () => {
    const merkkin = prompt("Give the first number: ")
    const ekaNumero = parseFloat(merkkin);

    if (isNaN(ekaNumero) || ekaNumero <= 0) {
        console.log("Error")
    }
    return ekaNumero;
}

const toka = () => {
    const merkkin = prompt("Give the second number: ")
    const tokaNumero = parseFloat(merkkin);

    if (isNaN(tokaNumero) || tokaNumero <= 0) {
        console.log("Error")
    }
    return tokaNumero;
}

const merkki = () => {
    const merkkin = prompt("Give the symbol: ")
    const ekaMerkki = merkkin;
    return ekaMerkki;
}

const ekaNumero = eka();
const tokaNumero = toka();
const ekaMerkki = merkki();
let vastaus;

if (ekaMerkki == '-') {
    vastaus = ekaNumero - tokaNumero;
}

else if (ekaMerkki == '/') {
    vastaus = ekaNumero / tokaNumero;
}

else if (ekaMerkki == '+') {
    vastaus = ekaNumero + tokaNumero;
}

else if (ekaMerkki == '*') {
    vastaus = ekaNumero * tokaNumero;
}

console.log(vastaus);


