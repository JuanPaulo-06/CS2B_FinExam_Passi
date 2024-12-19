const numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
const names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

const mergedArray = numbers.concat(names);
console.log("Merged Array:", mergedArray);

numbers.sort((a, b) => b - a);
console.log("Numbers sorted in reverse:", numbers);

names.sort();
console.log("Names sorted alphabetically:", names);
