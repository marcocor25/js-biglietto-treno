// PREZZO DEL BIGLIETTO (0,21€ * KM);

// SE IL VIAGGIATORE È MINORE DI ANNI 18 ALLORA VIENE APPLICATO UNO SCONTO DEL 20%;

// ALTRIMENTI SE IL VIAGGIATORE È MAGGIORE DI ANNI 65 VIENE APPLICATO UNO SCONTO DEL 40%;

// DEVO CHIEDERE ALL'UTENTE IL NUMERO DEI KM CHE VUOLE PERCORRERE E L'ETÀ DEL VIAGGIATORE;

// ****************************************************************************************************

let welcome = 'Buongiorno!';
alert(welcome);
console.log(welcome);

welcome = 'Oggi la guiderò nel calcolo del prezzo del suo biglietto ferroviario.';
alert(welcome);
console.log(welcome);

let askAge = prompt('Quanti anni ha il viaggiatore?');
console.log(askAge);

let askKilometers = prompt('Quanti chilometri deve percorrere?');
console.log(askKilometers);

let askBooleaner = prompt('Il viaggiatore è studente presso Boolean? Risponda sì o no, grazie.')
console.log(askBooleaner);

let kilometersPrice = 0.21;

let progress = 'Sto calcolando il prezzo del suo biglietto, attendere prego...';
alert(progress);
console.log(progress);

if (askBooleaner == "Si") {
    document.getElementById("price").innerHTML = 'Lei può viaggiare senza alcun titolo di viaggio! 😎';
    console.log('Lei può viaggiare senza alcun titolo di viaggio! 😎');
} else if (askBooleaner == "Sì") {
    document.getElementById("price").innerHTML = 'Lei può viaggiare senza alcun titolo di viaggio! 😎';
    console.log('Lei può viaggiare senza alcun titolo di viaggio! 😎');
} else if (askBooleaner == "si") {
    document.getElementById("price").innerHTML = 'Lei può viaggiare senza alcun titolo di viaggio! 😎';
    console.log('Lei può viaggiare senza alcun titolo di viaggio! 😎');
} else if (askBooleaner == "sì") {
    document.getElementById("price").innerHTML = 'Lei può viaggiare senza alcun titolo di viaggio! 😎';
    console.log('Lei può viaggiare senza alcun titolo di viaggio! 😎');
} else if (askAge < 18) {
    let standardPrice = askKilometers * kilometersPrice;
    let discountPrice = standardPrice * 20 / 100;
    let finalPrice = standardPrice - discountPrice;
    document.getElementById("price").innerHTML = `Il prezzo del suo biglietto è di ${'€' + finalPrice.toFixed(2)}. <br /> La informiamo inoltre che le è stata applicata una riduzione del 20% grazie alla tariffa Under 18.`;
    console.log(`Il prezzo del suo biglietto è di ${'€' + finalPrice}`);
} else if (askAge > 65) {
    let standardPrice = askKilometers * kilometersPrice;
    let discountPrice = standardPrice * 40 / 100;
    let finalPrice = standardPrice - discountPrice;
    document.getElementById("price").innerHTML = `Il prezzo del suo biglietto è di ${'€' + finalPrice.toFixed(2)}. <br /> La informiamo inoltre che le è stata applicata una riduzione del 40% grazie alla tariffa Under 65.`;
    console.log(`Il prezzo del suo biglietto è di ${'€' + finalPrice}`);
} else {
    let standardPrice = askKilometers * kilometersPrice;
    document.getElementById("price").innerHTML = `Il prezzo del suo biglietto è di ${'€' + standardPrice.toFixed(2)}`;
    console.log(`Il prezzo del suo biglietto è di ${'€' + standardPrice}`);
}