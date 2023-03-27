// Exercice 4 : Volume Of A Sphere

// The formula for the volume of a sphere is:

// V = (4/3)πr^3

// Where:

// V is the volume of the sphere
// π (pi) is a mathematical constant approximately equal to 3.14159
// r is the radius of the sphere (distance from the center to any point on the surface of the sphere)

      const form = document.querySelector('#MyForm');
      const radiusInput = document.querySelector('#radius');
      const volumeInput = document.querySelector('#volume');
      form.addEventListener('submit', (event) => {
        event.preventDefault();
        const radius = parseInt(radiusInput.value);
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        volumeInput.value = volume.toFixed(2);
      });