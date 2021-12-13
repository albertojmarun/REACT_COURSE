// DESTRUCTURING ARRAYS
const people = ['Goku', 'Vegetta', 'Trunks'];

const [, , person1] = people;

console.log(person1);
// console.log(people[0]);
// console.log(people[1]);
// console.log(people[2]);

const returnArray = () => ['ABC', 123];

const [letters, numbers] = returnArray();

console.log(letters);
console.log(numbers);

const return_array = (value) => [value, ()=> console.log('Hola Mundo') ];

const [name, setName] = return_array('Goku');
console.log(name);
console.log(setName);