// Exercise 1 : Users
// Using Javascript:
// Retrieve the div and console.log it
let divElement = document.querySelector('div'); 
console.log(divElement); 

// Change the name “Pete” to “Richard”.
let secondLiElement = document.querySelector('li:nth-child(2)');
secondLiElement.textContent = 'Richard';
console.log(secondLiElement)

// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)

let listElements = document.querySelectorAll('li'); 
for (let i = 0; i < listElements.length; i++) {
  if (listElements[i].textContent === 'Sarah') { 
    listElements[i].remove(); 
    break; 
  }
}

// Change each first name of the two <ul>'s to yo ur name. (Hint : use a loop)
let ulElement=document.querySelectorAll('ul');
for (let j = 0; j < ulElement.length; j++) {
    const firstLiElement = ulElement[j].querySelector('li:first-child');
    firstLiElement.textContent = "Malala";
  }

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.

for (let i = 0; i < ulElement.length; i++) {
  ulElement[i].classList.add('student_list');
}

// Add the classes university and attendance to the first <ul>.
const firstUlElement = document.querySelector('ul.list:first-of-type');
firstUlElement.classList.add('university', 'attendance');


