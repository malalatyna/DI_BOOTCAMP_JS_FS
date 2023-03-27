// Exercise 3 : Transform The Sentence
// In the JS file:

// Declare a global variable named allBoldItems.
let allBoldItems;
// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.

function getBold_items() {
  const paragraph = document.querySelector('p');
  allBoldItems = paragraph.querySelectorAll('strong');
}
getBold_items();
console.log(allBoldItems);
// Create a function called highlight() that changes the color of all the bold text to blue.

function highlight() {
  allBoldItems = document.querySelectorAll('strong');
  allBoldItems.forEach((boldItem) => {
    boldItem.style.color = 'blue';
  });
}

// Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal(){
  allBoldItems = document.querySelectorAll('strong');
  allBoldItems.forEach((boldItem) => {
    boldItem.style.color = 'black';
});
}

// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example

document.getElementById("texto").addEventListener("mouseover", highlight);
document.getElementById("texto").addEventListener("mouseout", return_normal);