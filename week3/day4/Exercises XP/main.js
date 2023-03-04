//Exercise 1: Simple If/Else Statement

let x = 12;
let y = 27;
if(x>y){
    console.log("x is the biggest number");
}else{
    console.log("y is the biggest number");
}


//Exercise 2: Chihuahua
let newDog ='Chihuahua';
//Check and display how many letters are in newDog.
console.log(newDog.length);
//Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
console.log(newDog.toUpperCase());
console.log(newDog.toLowerCase());

if (newDog=='Chihuahua')
 {
    console.log('I love Chihuahuas, it’s my favorite dog breed');

 }
 else
 {
    console.log('I dont care, I prefer cats');
 }

//Exercises 3: in another file

 //Exercise 4: Group Chat

const users = ["Lea123", "Princess45", "cat&doglovers", "helooo@000", "little22","bigData23"];
// const users=["Lea123", "Princess45"];
// const users=[];
 //the number of users that are connected to the group chat 
 console.log(users.length);
const extraUsers=users.length-2;

if(users.length===0)
{
    console.log("no one is online");
}
else if (users.length>2)
{
    console.log(users[0],",", users[1],"and", extraUsers ,"more are online");
   
}else {
    console.log(`${users[0]} and ${users[1]} are online`);
}