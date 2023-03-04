//exercices 1
const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//remove Banana from array
fruits.splice(0,1);
console.log(fruits);

//sort the array in alphabetical order
fruits.sort();
console.log(fruits);

//Add 'Kiwi' to the end of the array
fruits.push(`Kiwi`);
console.log(fruits);

//Remove "Apples" from the array
fruits.shift();
console.log(fruits);

//Sort the array in reverse order 
fruits.reverse();
console.log(fruits);

//exercices 2
const moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1].toString());





