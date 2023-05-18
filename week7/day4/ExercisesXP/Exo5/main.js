// Exercise 5 : Juice Bar
//You will use nested functions, to open a new juice bar.


function makeJuice(size) {
    const ingredients = []; // Create an empty array named ingredients
  
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      ingredients.push(ingredient1, ingredient2, ingredient3); // Push the ingredients into the ingredients array
    }
  
    function displayJuice() {
      const sentence = `The client wants a ${size} juice, containing `;
      const ingredientList = [];
      ingredients.forEach(function(ingredient) {
        ingredientList.push(ingredient);
      });
      const allSentence = `${sentence}${ingredientList.join(', ')}.`;
      document.getElementById('textId').textContent = allSentence;
    }
  
    addIngredients('apple', 'mango', 'peach');
    addIngredients('orange', 'banana', 'strawberry');
    displayJuice();
  }
  
  makeJuice('large');
  