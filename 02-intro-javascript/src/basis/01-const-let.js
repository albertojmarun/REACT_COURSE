// CONSTANTS AND VARIABLES

const name = 'Alberto Jose';
const lastName = 'Marun Indriago';

let diceValue = 5;

diceValue = 4;

console.log(name, lastName, diceValue);


// Visibility Ambit

if(true){
    let diceValue = 6;
    const name = 'Peter';
    console.log(name, diceValue);
}

console.log(diceValue);