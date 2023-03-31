// Exercise 3: Drag & Drop

// add the functionality which will 
// allow you to drag the box and drop it into the target. 

// Get the target and box elements
const target = document.getElementById("target");
const box = document.getElementById("box");

box.setAttribute('draggable', true);


box.addEventListener("dragend", function(event) {

  const x = event.clientX ;
  const y = event.clientY;

  box.style.left = x + "px";
  box.style.top = y + "px";
});
