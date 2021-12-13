// DESTRUCTURING ASSIGNMENT
const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman',
    rank: 'Soldier',
}

// const { name, age, key } = person;

// console.log(name);
// console.log(age);
// console.log(key);

// console.log(person.edad);
// console.log(person.key);

const use = ({key, age, name, rank = 'Captain'}) => {
    // console.log(name, age, rank);

    return {
        keyName: key,
        anos: age,
        latlng: {
            lat: 3.14,
            lng: 3.15,
        },
    }
}

// useContext(person);

const {keyName, anos, latlng: {lat, lng}} = use(person);
// const {lat, lng} = latlng;

console.log(keyName, anos, lat, lng);