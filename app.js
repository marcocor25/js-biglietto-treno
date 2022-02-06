// PREZZO DEL BIGLIETTO (0,21€ * KM);

// SE IL VIAGGIATORE È MINORE DI ANNI 18 ALLORA VIENE APPLICATO UNO SCONTO DEL 20%;

// ALTRIMENTI SE IL VIAGGIATORE È MAGGIORE DI ANNI 65 VIENE APPLICATO UNO SCONTO DEL 40%;

// DEVO CHIEDERE ALL'UTENTE IL NUMERO DEI KM CHE VUOLE PERCORRERE E L'ETÀ DEL VIAGGIATORE;

// **************************************************

let welcome = 'Benvenuto nel mio calcolatore di prezzi del biglietto del treno!';
alert(welcome);
console.log(welcome);

let askAge = prompt('Quanti anni ha il viaggiatore?');
console.log(askAge);

let askKilometers = prompt('E quanti chilometri deve percorrere?');
console.log(askKilometers);

const progress = 'Sto calcolando il prezzo del suo biglietto, attenda...';
alert(progress);
console.log(progress);

const price = 0.21 * askAge;
alert(price);