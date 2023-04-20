//Daily Challenge : True Or False
//Create a function that returns true if all parameters are truthy, and false otherwise.

function allTruthy(...arg) {
    return arg.every(a => a);
  }

console.log(allTruthy(true, true, true)); 
console.log(allTruthy(true, false, true)); 
console.log(allTruthy(5, 4, 3, 2, 1, 0)); 

   