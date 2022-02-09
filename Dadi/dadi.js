// Numero random Giocatore / Computer
const numUtente = Math.floor(Math.random() * 6) + 1;
console.log('Il tuo numero è ' + numUtente);

const numComp = Math.floor(Math.random() * 6) + 1;
console.log('Il numero del tuo avversario è ' + numComp);

// Stabilire vincitore
if (numUtente > numComp) {
    console.log('Hai vinto!');
    alert('Hai vinto!');
}
else if (numUtente == numComp) {
    console.log('Parità, riprova');
    alert('Parità, riprova');
}
else {
    console.log('Hai perso :(');
    alert('Hai perso :(');
}