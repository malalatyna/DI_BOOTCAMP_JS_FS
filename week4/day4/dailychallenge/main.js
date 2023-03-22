//Daily Challenge: Words In The Stars
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.


function getUserAnswer() {
    let text = prompt("Please enter several words separated by commas");
    return text;
  }
  
  function validateUserAnswer(text) {
    if (!text) {
      console.log("You didn't enter anything.");
      return false;
    } else if (!text.includes(",")) {
      console.log("The sentence does not contain a comma.");
      return false;
    } else {
      return true;
    }
  }
  
  function findLongestWordLength(wordsInArray) {
    let maxLength = 0;
    for (let i = 0; i < wordsInArray.length; i++) {
      if (wordsInArray[i].length > maxLength) {
        maxLength = wordsInArray[i].length;
      } 
    }
    return maxLength;
  }
  
  function createFrame(word, maxLength) {
    let spaces = " ".repeat(maxLength - word.length);
    return `* ${word}${spaces} *`;
  }

  printFrame() 
  function printFrame() {
    let text = getUserAnswer();
  
    if (!validateUserAnswer(text)) {
      return;
    }
  
    let wordsInArray = text.split(",");
    console.log("The words in the sentence are:", wordsInArray);
  
    let maxLength = findLongestWordLength(wordsInArray);
  
    // Create the top and bottom borders of the frame
    let border = "*".repeat(maxLength + 4);
  
    // Print the top border
    console.log(border);
  
    // Print each word in the array with side borders
    for (let i = 0; i < wordsInArray.length; i++) {
      let word = wordsInArray[i];
      let frame = createFrame(word, maxLength);
      console.log(frame);
    }
  
    // Print the bottom border
    console.log(border);
  }
  
  
