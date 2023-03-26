
//Daily Challenge: Planets

// Define the planets array
// Each planet should have a different background color.

const planets = [
    { name: 'Mercury', color: 'blue', moons: 0 },
    { name: 'Venus', color: 'gray', moons: 0 },
    { name: 'Earth', color: 'red', moons: 1 },
    { name: 'Mars', color: 'orange', moons: 2 },
    { name: 'Jupiter', color: 'lightblue', moons: 79 },
    { name: 'Saturn', color: 'red', moons: 82 },
    { name: 'Uranus', color: 'green', moons: 27 },
    { name: 'Neptune', color: 'lightgreen', moons: 14 },
  ];
  
const section = document.querySelector('.listPlanets');
planets.forEach((planet) => {
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
const planetDiv = document.createElement('div');
 planetDiv.classList.add('planet');
  

  // (Hint: you could add a new class to each planet - each class containing a different background-color).
  planetDiv.classList.add(`planet-${planet.name.toLowerCase()}`);
  planetDiv.style.backgroundColor = planet.color;
  planetDiv.style.display = 'flex'; // Add flexbox display to planet div
  planetDiv.style.flexDirection = 'row'; // Set flex direction to row
  
  // Finally append each div to the <section> in the HTML (presented below).
    section.appendChild(planetDiv);

  // Bonus: Do the same process to create the moons.
  // Be careful, each planet has a certain amount of moons. How should you display them?
  // Should you still use an array for the planets ? Or an array of objects ?
  
  // Loop through the moons of the planet and create a div for each moon
  
  for (let i = 1; i <= planet.moons; i++) {
    const moonDiv = document.createElement('div');
    moonDiv.classList.add('moon');
    moonDiv.style.left = `${i * 40}px`;
    moonDiv.style.top = "50%";
    moonDiv.style.transform = `translate(-50%, -50%)`;
    planetDiv.appendChild(moonDiv);
  }
});