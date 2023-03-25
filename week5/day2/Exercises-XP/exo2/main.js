
// Exercise 2 : Users And Style
//using Javascipt
// Add a “light blue” background color and some padding to the <div>.

const divElement = document.querySelector('div'); 
divElement.style.backgroundColor = "lightblue";
divElement.style.padding = '20px';

// Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)

const firstLiElement = document.querySelector('li:first-child');
firstLiElement.style.display='none';
// Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)
const secondLiElement = document.querySelector('li:nth-child(2)');
secondLiElement.style.border="2px solid black"
// Change the font size of the whole body.
const body=document.querySelector('body');
body.style.fontSize='30px'; 
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

if(divElement.style.backgroundColor === "lightblue"){
    
    alert(`Hello ${firstLiElement.textContent} and ${secondLiElement.textContent}`)
}

