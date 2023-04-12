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
//funcOne()
// when I run the console. the alert is displayed (`inside the funcOne function 3`)
// prediction and comments: a=3 because a is reassigned to 3 if a>1
// #1.2 What will happen if the variable is declared 
// with const instead of let ?

//#2
let a = 0;
function funcTwo() {
    a = 5;
}
function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
//funcThree() . alert message: inside the funcThree function 0
//funcTwo()
//funcThree()
// #2.2 What will happen if the variable is declared 
// with const instead of let ?