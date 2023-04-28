//Exercise 5 : Colors #2

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"]
//Write a JavaScript program that displays the colors in the following order :
// “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect


  colors.forEach((color, index) => {
    const suffix = (index+1< 4) ? ordinal[index+1] : ordinal[0];
    console.log(`${index+1}${suffix} choice is ${color}.`);
  });


