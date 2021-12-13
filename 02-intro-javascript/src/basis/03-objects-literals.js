// LITERAL OBJECTS
const person = {
    name: 'Alberto',
    lastName: 'Marun',
    age: 20,
    direction: {
        city: 'Cordoba',
        zipCode: 1450,
        lat: 3.1415,
        lng: 3.1415,
    }
};

// NEVER DO THIS, THIS IS AN ASSIGNMENT BY REFERENCE NOT BY VALUE.
// const second_person = person;

// CLONE AN OBJECT
const second_person = {...person};

second_person.name = 'Peter';

console.log(person);
console.log(second_person);