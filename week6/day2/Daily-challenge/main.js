//Daily Challenge : Show Only The Letters

//Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)


const lettersInput = document.getElementById('entered-letter');
const errorMessage = document.getElementById('error-message');

lettersInput.addEventListener('input', function(event) {
  const value = event.target.value;
  // replace non-letter characters with empty string
  const regex = value.replace(/[^a-zA-Z]/g, ''); 

  if (regex !== value) {
    // update input value with letters-only string
    event.target.value = regex; 
    errorMessage.textContent = 'Only letters are accepted';
  } else {
    errorMessage.textContent = '';
  }
});

