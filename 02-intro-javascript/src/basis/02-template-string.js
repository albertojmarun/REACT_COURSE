// TEMPLATE STRING
const name = 'Alberto Jose';
const lastName = 'Marun Indriago';

// const wholeName = name + ' ' + lastName;
const wholeName = `${name} ${lastName}`;

console.log(wholeName);

function getHi(name){
    return 'Hola ' + name;
}

console.log(`TEXTO -> ${getHi(wholeName)}`)