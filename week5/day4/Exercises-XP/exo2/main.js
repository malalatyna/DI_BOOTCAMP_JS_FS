// Exercise 2 : Work With Forms
// Retrieve the form and console.log it.


let formElement=document.querySelector('form')
console.log(formElement)

// Retrieve the inputs by their id and console.log them.

let input1= document.getElementById('fname')
let input2= document.getElementById('lname')
console.log(input1);
console.log(input2);

// Retrieve the inputs by their name attribute and console.log them

let inputOne= document.getElementsByName('fname')[0];
let inputTwo= document.getElementsByName('lname')[0];
console.log(inputOne);
console.log(inputTwo);


// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,


const submitBtn = document.getElementById('submit');
let ulElement=document.querySelector("ul");

submitBtn.addEventListener('click', function(event) {
  event.preventDefault();
// make sure that they are not empty,
  const firstName =input1.value.trim();
  const lastName = input2.value.trim();
  
  if (!firstName || !lastName) {
    alert('Please fill the form');
    return;
  }
  
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

  let firstLi=document.createElement("li");
  let secondLi=document.createElement("li");
  firstLi.appendChild(document.createTextNode(input1.value))
  secondLi.appendChild(document.createTextNode(input2.value))
  ulElement.appendChild(firstLi);
  ulElement.appendChild(secondLi);
  console.log(ulElement);

  // Clear the form inputs
  input1.value = '';
  input2.value = '';
});
