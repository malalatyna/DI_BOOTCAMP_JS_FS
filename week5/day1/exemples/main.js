// For each of the questions, find 2 WAYS of accessing :

// 1. The div DOM node?
let divElement = document.body.children[0];
console.log(divElement)

divElement = document.body.firstElementChild;
console.log(divElement)
// 2. The ul DOM node?
let ulElement = divElement.nextElementSibling;
console.log(ulElement)

ulElement = document.body.children[1];
console.log(ulElement)

// 3. The second li (with Pete)?

let firstLiElement = ulElement.firstElementChild
console.log(firstLiElement)

let { lastElementChild: secondLiElement } = ulElement
console.log(secondLiElement)

secondLiElement = firstLiElement.nextElementSibling
console.log(secondLiElement)