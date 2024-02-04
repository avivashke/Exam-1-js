const arr = ["apple", "banana", "cherry", "date"];
const startWithB = arr.some(word => word.startsWith("b"));
console.log("Is there at least one word in the array that starts with the letter b? ", startWithB);
