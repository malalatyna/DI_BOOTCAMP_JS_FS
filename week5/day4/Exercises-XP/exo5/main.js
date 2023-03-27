// Exercise 5 : Event Listeners
// Instructions
// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.

   // Get the element
   const element = document.getElementById("my-element");

   // Add event listeners
    element.addEventListener("click", () => {
        element.style.fontSize = "24px";
        element.style.lineHeight = "200px";
        element.textContent="You clicked me!"
   });

   element.addEventListener("mouseover", () => {
    element.style.backgroundColor = "lightgreen";
    element.style.color = "purple";
    element.textContent = "Mouse is over me!";
   });

   element.addEventListener("mouseout", () => {
    element.textContent = "Mouse is out";
     element.style.fontSize = "12px";
     element.style.lineHeight = "50px";
   });

   element.addEventListener("dblclick", () => {
    element.textContent = "Double-clicked!";
     element.style.left = "90px";
     element.style.top = "150px";
   });