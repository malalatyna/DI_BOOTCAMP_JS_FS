// Exercise 3 : Change The Navbar


// Using Javascript, in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation,
// using the setAttribute method.
 

let divElement = document.getElementById("navBar")
 divElement.setAttribute("id", "socialNetworkNavigation");
 console.log(divElement)

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
let newLi = document.createElement('li')  
console.log(newLi)

// Create a new text node with “Logout” as its specified text.

let newTextNode = document.createTextNode('Logout');

// Append the text node to the newly created list node (<li>).
newLi.appendChild(newTextNode);
document.body.appendChild(newLi);

// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
let ulElement = document.getElementById('socialNetworkNavigation'); 
ulElement.appendChild(newLi);

// Use the firstElementChild and the lastElementChild properties to retrieve the first
// and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

const firstLiElement = ulElement.firstElementChild;
console.log(firstLiElement.textContent);
const lastLiElement = ulElement.lastElementChild;
console.log(lastLiElement.textContent);

