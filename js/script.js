console.log(`working`);

const evenNumber = [];
console.log(evenNumber.length);

while (evenNumber.length < 10) {

    let number = prompt('inserisci  un numero dispari');
    if ( isNaN != number && number % 2 == 1){
        evenNumber.push(number);
        console.log(evenNumber.length);
    }
}

for ( let i = 0 ; i < 10 ; i++){
    console.log(evenNumber[i]);
}