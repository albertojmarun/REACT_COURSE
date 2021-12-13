// FUNCTIONS
const sayHiName = function(name){
    return `Hello ${name}`;
}

// ARROW FUNCTIONS
const sayHiArrow = (name) => {
    return `Hello ${name}`;
}

const sayHiArrowFunction = (name) => `Hello ${name}`;

const helloWorld = () => 'Hello World';

console.log( sayHiName );
console.log( sayHiArrow('Cristiano Ronaldo') );
console.log( sayHiArrowFunction('Neymar Jr.') );
console.log( helloWorld() );

const getUser = () => ({
    id: 'ABC123',
    username: 'iamprogrammer'
});

const user = getUser();
console.log( user );

/**
 *  1. Transformar a una función flecha.
 *  2. Retornar un objetivo implícito.
 *  3. Probarlo.
 */
const getUsuarioActivo = (name) => ({
    id: 'ABC567',
    username: name,
});

const activeUser = getUsuarioActivo('Fernando');
console.log(activeUser);