// Exercise 1 : Change The Article

// Using a DOM property, retrieve the h1 and console.log it.
let h1Element=document.querySelector('h1')
console.log(h1Element)
    
// Using DOM methods, remove the last paragraph in the <article> tag.
const article = document.querySelector('article');
const lastParagraph = article.lastElementChild;
article.removeChild(lastParagraph);

// Add an event listener which will change the background color of the h2 to red, when it’s clicked on.

const h2Element=document.querySelector('h2')
h2Element.addEventListener("click", function(){
    h2Element.style.backgroundColor=('red')
});

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3Element=document.querySelector('h3')
h3Element.addEventListener("click", function(){
    h3Element.style.display=('none')
});

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

let button = document.getElementsByTagName("button")[0];
const pElements = document.querySelectorAll('p');

button.addEventListener("click", function() {
  for (let i = 0; i < pElements.length; i++) {
    pElements[i].style.fontWeight = 'bold';
  }
});

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.

h1Element.addEventListener('mouseover', function() {
  const randomSize = Math.floor(Math.random() * 101); 
  h1Element.style.fontSize = randomSize + 'px'; 
});

// BONUS : When you hover on the 2nd paragraph, it should fade out

const secondParagraph = document.querySelectorAll('p')[1];

secondParagraph.addEventListener('mouseover', function() {
  secondParagraph.classList.add('fade-out');
});

secondParagraph.addEventListener('mouseleave', function() {
  secondParagraph.classList.remove('fade-out');
});
