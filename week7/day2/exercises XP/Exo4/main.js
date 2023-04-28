//Exercise 4 : Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
//Write a JavaScript program that displays the colors in the following order :
// “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…

colors.forEach((color, index) => {
    console.log(`${index+1}# choice is ${color}`)  
});

// Check if at least one element of the array is equal to the value “Violet”. 
// If yes, console.log("Yeah"), else console.log("No...")

colors.includes("Violet") ? console.log("Yeah") : console.log("No..");



