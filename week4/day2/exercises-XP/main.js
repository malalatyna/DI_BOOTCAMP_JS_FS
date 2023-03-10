//Exercise 1 : List Of People

const people = ["Greg", "Mary", "Devon", "James"];

//Part I - Review About Arrays
// 1.Write code to remove “Greg” from the people array.
people.shift();
console.log(people);

//2. Write code to replace “James” to “Jason”.
 
people.pop();
people.push("Jason");
console.log(people);


//3.Write code to add your name to the end of the people array
 people.push("Malala");
 console.log(people);

 //4.Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

console.log(people.indexOf("Mary"));

//5.Write code to make a copy of the people array using the slice method
let copyPeople = people.slice(1);
console.log(copyPeople);


//6. Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf('Foo'))// the output is -1 because Foo is not in the array

//7.Create a variable called last which value is the last element of the array.

let last=people.length-1;

console.log(people[last]);

//Part II - Loops
// 1.Using a loop, iterate through the people array and console.log each person.

for (let i = 0; i <people.length; i++) {

    console.log(people[i]);
   
  }


//2.Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .


for (let j = 0; j <people.length; j++) {

    if(people[j-1]==="Jason"){
    
        break;
    }
    
    console.log(people[j]);
  }
  
//Exercise 2 : Your Favorite Colors
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .


const colors= ["red","bleue", "yellow", "green","white"];


for (let i=0; i<colors.length; i++){
  console.log(`My #${i+1} choice is ${colors[i]}`);
}

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

const suffixe=["st", "nd", "rd", "th", "th"];
for (let j=0;j<5;j++){
    console.log(`My ${j+1}${suffixe[j]} choice is ${colors[j]}`);
}

// Exercise 3 : Repeat The Question
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?


let xresult=prompt("Please enter a number!");
let nbr=parseInt(xresult,10);

console.log(nbr);

while ((nbr<=10)){

 nbr=prompt("Please enter a new number"); 
}

// Exercise 4 : Building Management
//Review About Objects
// Copy and paste the above object to your Javascript file.

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
      firstFloor: 3,
      secondFloor: 4,
      thirdFloor: 9,
      fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent:  {
      sarah: [3, 990],
      dan:  [4, 1000],
      david: [1, 500],
  },
}
 

// Console.log the number of floors in the building.
console.log("The number of floors:", building.numberOfFloors);

// Console.log how many apartments are on the floors 1 and 3.

console.log("Number of apt in the first floor:", building.numberOfAptByFloor.firstFloor );
console.log("Number of apt in third floor:", building.numberOfAptByFloor.thirdFloor);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log("The name of the 2nd tenant is:", building.nameOfTenants[1], "and his number of rooms is:", building.numberOfRoomsAndRent.dan[0]);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200
let x = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1]; //rent of David and Sarah
console.log(x)

if( x > building.numberOfRoomsAndRent.dan[1]){
  building.numberOfRoomsAndRent.dan[1]= 1200;
  console.log("Dan's new rent is:", building.numberOfRoomsAndRent.dan[1]);
}


// Exercise 5 : Family
// Create an object called family with a few key value pairs.

const family={dad: 'John' , mum: 'suzy', baby1: 'kevin', baby2: 'roy'};

for (let x in family){
  // Using a for in loop, console.log the keys of the object.
 console.log(x);
 // Using a for in loop, console.log the values of the object.
 console.log(family[x])
}

//Exercise 6 : Rudolf
//Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
let answer ="";
for (const y in details){
  answer = answer + " " + y + " " + details[y];
}
console.log(answer);

// Exercise 7 : Secret Group
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
let secretSociety=names.map(names => names[0]);

// Console.log the name of their secret society. The output should be “ABJKPS”

console.log(secretSociety.join(''));