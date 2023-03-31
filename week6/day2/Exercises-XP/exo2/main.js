// Exercise 2 : Move The Box

// use setInterval to move the <div id="animate"> to the right side of the <div id="container">,
// when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions

const btn = document.getElementById('btn');
const container = document.getElementById('container');
const animate = document.getElementById('animate');

let intervalId;

btn.addEventListener('click', () => {
  let position = 0;
  intervalId = setInterval(() => {
    position++;
    animate.style.left = position + 'px';
    if (position >= container.offsetWidth - animate.offsetWidth) {
      clearInterval(intervalId);
    }
  }, 1);
});

