// PROMISES
import {getHeroeById, getHeroeByOwner} from './basis/08-imp-exp'

// const my_promise = new Promise( (resolve, reject) => {
//     setTimeout(() =>{
//         // console.log('2 seconds after...')
//         // resolve();
//         let heroe = getHeroeById(2);
//         console.log(heroe)
//         resolve(heroe);
//         // reject('No se pudo encontrar el heroe');
//     }, 2000);
// });

// my_promise
// .then( (person) => {
//     console.log('Persona is -> ', person);
// } )
// .catch( (error) => console.warn(error));

const getHeroeByIDAsync = (id) => {
    return new Promise( (resolve, reject) => {
        setTimeout(() =>{
            // console.log('2 seconds after...')
            // resolve();
            let heroe = getHeroeById(id);
            // console.log(heroe)

            (typeof heroe !== 'undefined') ? resolve(heroe) : reject("HEROE WITH THAT ID DOESN'T EXIST");
            // if(typeof heroe !== 'undefined'){
            //     resolve(heroe);
            // }else{
            //     reject("HEROE WITH THAT ID DOESN'T EXIST");
            // }
        }, 2000);
    });
}

getHeroeByIDAsync(1)
    .then( console.log )
    .catch(  console.log );