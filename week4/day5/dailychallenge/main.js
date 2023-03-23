

// //Daily Challenge: 99 Bottles Of Beer

// 99 bottles of beer on the wall
// 99 bottles of beer
// Take 1 down, pass it around
// 98 bottles of beer on the wall


let numBottles = parseInt(prompt("Enter number of bottles?"));

let bottlesToTakeDown = 1;

while (numBottles > 0) {
  console.log(numBottles + " bottles of beer on the wall");
  console.log(numBottles + " bottles of beer");
  numBottles -= bottlesToTakeDown;
  
  if (numBottles <= 0) {
    console.log("No bottle of beer on the wall.");
  } else if (numBottles === 1) {
    console.log("Take " + bottlesToTakeDown + " down, pass it around");
    console.log(numBottles + " bottle of beer on the wall");
  } else {
    console.log("Take " + bottlesToTakeDown + " down, pass them around");
    console.log(numBottles + " bottles of beer on the wall");
  }
  
  bottlesToTakeDown++;
}

console.log("No bottle of beer on the wall.");
