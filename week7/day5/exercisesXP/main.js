
//Create a Random Quote Generator game in Javascript.
// Create an array of quotes
// const quotes = [
//   {
//       id: 0,
//       author: "Dr. Seuss",
//       quote: "Today was good. Today was fun. Tomorrow is another one."
//   },
//   {
//       id: 1,
//       author: "Simone Biles",
//       quote: "At the end of the day, if I can say I had fun, it was a good day."
//   },
//   {
//       id: 2,
//       author: "Oprah Winfrey",
//       quote: "The biggest adventure you can ever take is to live the life of your dreams."
//   },
//   {
//       id: 3,
//       author: "Mahatma Gandhi",
//       quote: "Be the change that you wish to see in the world."
//   }
// ];

// // Initialize variables
// let currentQuote = null;
// const quoteElement = document.querySelector('#quote');
// const authorElement = document.querySelector('#author');
// const generateBtn = document.querySelector('#quote-btn');

// // Function to generate a random quote
// function generateQuote() {
//   let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
//   // Check if the new quote is the same as the current one
//   while (randomQuote === currentQuote) {
//     randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//   }
  
//   // Update the current quote
//   currentQuote = randomQuote;
  
//   // Display the quote in the DOM
//   quoteElement.textContent = currentQuote.quote;
//   authorElement.textContent = '- ' + currentQuote.author;
// }

// // Add event listener to the button
// generateBtn.addEventListener('click', generateQuote);

// // Initial quote
// generateQuote();
const quotes = [
  {
    id: 0,
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world."
  },
  {
    id: 1,
    author: "Eleanor Roosevelt",
    quote: "No one can make you feel inferior without your consent."
  },
  {
    id: 2,
    author: "Albert Einstein",
    quote: "Try not to become a man of success, but rather try to become a man of value."
  },
  {
    id: 3,
    author: "Maya Angelou",
    quote: "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel."
  }
];

let currentQuote = null;
const quoteSection = document.querySelector("#quote-section");
const generateQuoteBtn = document.querySelector("#generate-quote-btn");

function generateQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  while (randomQuote === currentQuote) {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  }

  currentQuote = randomQuote;

  const quoteText = document.createElement("p");
  quoteText.textContent = currentQuote.quote;
  const authorText = document.createElement("p");
  authorText.textContent = "- " + currentQuote.author;

  quoteSection.innerHTML = "";
  quoteSection.appendChild(quoteText);
  quoteSection.appendChild(authorText);
}

generateQuoteBtn.addEventListener("click", generateQuote);

generateQuote();
