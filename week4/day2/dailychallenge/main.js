

//Daily Challenge: Stars
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by yourself, without looking at the answers on the internet.


//Method using one loop

const nbrMaxStar=6;
let stars= ""
for(let i=0; i<nbrMaxStar;i++){
    
    stars=stars + " * "
    console.log(stars);
}

//Method using nested for loops

const nbrMaxStar1=6;
for(let i=0; i<nbrMaxStar1;i++){
    let stars1 = "";
    for (let j=0; j<=i;j++){
        stars1 = stars1 + '*';
    }
    console.log(stars1);
}