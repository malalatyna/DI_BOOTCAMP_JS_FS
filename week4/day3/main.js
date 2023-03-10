//Exercise 1
// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, console.log the age of my mum and my dad. My mum is twice my age, and my dad is 1.2 the age of my mum.

// 4. Call the function.


 const logFamilyAge=(myAge) =>{
    const myMumAge=myAge*2;
    const myDadAge=myMumAge*1.2;
    const myDadAgeInt=parseInt(myDadAge);
    console.log(`my mum's age ": ${myMumAge}, Dads age: ${myDadAgeInt}`)
 }
logFamilyAge(35);


//Exercise 2
// 1. Create a structured HTML file linked to a JS file

// 2. Write a Javascript function that takes a parameter: myAge

// 3. In the function, return the age of my mum (my mum is twice my age)

// 4. Call the function

// 5. In the global scope, console.log the result of the function



const getAgeTimes=(myAge1) =>{
    const myAgeofMum=myAge1*2;
    return myAgeofMum();
};


console.log()
 