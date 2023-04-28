//Exercise 1 : Scope

//Analyse the code below, and predict what will be the value of a in all the following functions.

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}
// #1.1 - run in the console:
funcOne()
// when I run the console. the alert is displayed (`inside the funcOne function 3`)
// prediction and comments: a=3 because a is reassigned to 3 if a=5 that is greater than 1

// #1.2 
//comments:when the function funcOne()is called; it will display an error if the variable is declared  with const instead of let 

//#2
let a = 0;
function funcTwo() {
    a = 5;
}
function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() 
funcTwo()
funcThree()
// #2.2 if the variable is declared with const instead of let, it will throw an error when funcTwo() is called, 
//because const variables cannot be reassigned once they have been initialized.
//When funcThree() is called, it will display an alert message box: "inside the funcThree function 0"

//#3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}
// #3.1 - run in the console:
funcFour()
funcFive()

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}
// #4.1 - run in the console:
funcSix()
// #4.2  if the variable is declared with const instead of let :
//the text "inside the funcSix function test" will be dispalyed when funcSix() is called 
//because the inner variable a inside funcSix() does not affect the outer constant variable a declared in the global scope.

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 if the variable is declared with const instead of let:
// It will display an alert message box: "in the if block 5", because a=5 is an inner variable 
//After an alert message box is displayed : "outside of the if block 2",because the outer constant variable a = 2 is still run outside the if block.