//Exercise 4 : My Book List
// Take a look at this link for help.
// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).
// The point of this challenge is to display a list of two books on your browser.
// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)

const allBooks = [
    {
      title: "Animal Farm",
      author: "George Orwell",
      image: "https://picsum.photos/seed/picsum/200/300",
      alreadyRead: true
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      image: "https://picsum.photos/seed/picsum/200/300",
      alreadyRead: false
    }
  ];
  console.log(allBooks[0]); // outputs the first book object
  console.log(allBooks[1]); // outputs the second book object
             
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.

  const listBooks = document.querySelector('.listBooks');
  const table = document.createElement('table');

  // Create a table header row
  const headerRow = document.createElement('tr');
  const titleHeader = document.createElement('th');
  titleHeader.textContent = 'Title';
  const authorHeader = document.createElement('th');
  authorHeader.textContent = 'Author';
  headerRow.appendChild(titleHeader);
  headerRow.appendChild(authorHeader);
  table.appendChild(headerRow);
  
  // Create a table body
  const tbody = document.createElement('tbody');

    allBooks.forEach((book) => {
    const row = document.createElement('tr');
    const titleCell = document.createElement('td');
    titleCell.textContent = book.title;

    const authorCell = document.createElement('td');
    authorCell.textContent = book.author;
  
    const imageCell = document.createElement('td');
    const image = document.createElement('img');
    image.src = book.image;
    image.style.width = '100px';
    imageCell.appendChild(image);
  
    // Set the text color of the cells to red if the book is already read
    if (book.alreadyRead) {
      titleCell.style.color = 'red';
      authorCell.style.color = 'red';
    }
  
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(imageCell);
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  listBooks.appendChild(table);
  
