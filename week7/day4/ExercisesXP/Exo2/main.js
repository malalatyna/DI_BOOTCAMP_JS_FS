// Exercise 2 : Kg And Grams

//Create a function that receives a weight in kilograms and returns it in grams.

//Use function declaration and invoke it.

function weight(inKg) {
     let inGram = 1000*inKg
     return inGram;
}         
weight(1); 

//Use function expression and invoke it.

let weight1 = function(inKg) {
    let inGram = 1000 * inKg;
    return inGram;
  };
weight1(1); 
  
//Write in a one line comment, 
//the difference between function declaration and function expression.
//A function declaration is hoisted to the top of their scope and can be called before it is defined,
// while a function expression cannot be called before it is defined and is assigned to a variable or property.

// use a one line arrow function and invoke it.

const weight2 = (inKg) => (inGram = 1000 * inKg)
weight2(1);