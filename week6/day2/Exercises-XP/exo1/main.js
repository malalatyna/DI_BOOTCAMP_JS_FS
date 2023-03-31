// Exercise 1: Timer
// Part 1: using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.

const myTimeout1 = setTimeout(myFunction1, 2000);
function myFunction1() {
 alert("Hello World!");
}

// Part II
// using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.

const myTimeout2 = setTimeout(myFunction2, 2000);
function myFunction2() {
    const para = document.createElement("p");
    const node = document.createTextNode("Hello World");
    para.appendChild(node);
    const element = document.getElementById("container");
    element.appendChild(para);
}

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
const mySetInterval = setInterval(myFunction2, 2000);

// The interval will be cleared (ie. clearInterval), when the user will click on the button.

let clearBtn=document.getElementById("clear");
clearBtn.addEventListener("click", function(){
    clearInterval(mySetInterval);
})
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

function limitInterval(){
    const element = document.getElementById("container");
    if (element.childElementCount === 5) {
        clearInterval(mySetInterval);
    }
}
setInterval(limitInterval, 2000);


