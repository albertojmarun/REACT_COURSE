// IMPORT, EXPORT AND COMMON ARRAY FUNCTIONS
import superheroes, {owners} from '../data/heroes.js';

console.log(owners);

export const getHeroeById = (id) => superheroes.find( (heroe) => (heroe.id === id));

export const getHeroeByOwner = (owner) => superheroes.filter( (heroe) => (heroe.owner === owner));

console.log( getHeroeById(2) );
console.log( getHeroeByOwner('DC') );