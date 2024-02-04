const arr = [2,6,2,6,467,54,45,2];

let result = arr.every(number => number < 9);
console.log(`All numbers in the array are smaller than 9? ${result}`);