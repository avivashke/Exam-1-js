const arr = [1,6,5,9,2,14,5,3,35,4];
const index = arr.findIndex(num => num > 12);

if (index !== -1) {
    console.log("The index of the first number bigger than 12 is:", index);
} else {
    console.log("No number in the array is bigger than 12.");
};