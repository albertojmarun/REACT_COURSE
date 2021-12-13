// ARRAYS
// const my_array = new Array(100);

const my_array = [1, 2, 3, 4];

// my_array.push(1);
// my_array.push(2);
// my_array.push(3);
// my_array.push(4);

// COPY THE INFORMATION OF THE ARRAY
let second_array = [...my_array, 5];

// MAP RETURNS A NEW ARRAY.
const third_array = second_array.map( function(number){
    return number * 2;
});

console.log(my_array);
console.log(second_array);
console.log(third_array);