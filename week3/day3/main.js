
// let age = prompt('how old are you');
// debugger;
// age=parseInt(age);
// if (age===18)
//   {
//     alert('congratulations');

//   }
// else if (isNaN(age)>18)
// {
//     alert('Powering on');

// }
// else{
//     alert('sorry');
// }

// let user = {
//     username:"nike",
//     password :"pwdofnike",
// };
// debugger;
// const database = [user];

// const newsfeed =[
//     {username:'bobo', timeline:'xxx'},
//     {username:'bobo', timeline:'xxx'},
//     {username:'bobo', timeline:'xxx'}
// ];

let str = "Happy BirthDay";
let patt = /birthday/i;
let result = str.match(patt);
console.log(result); //returns true

if (result){
    console.log('Yes')
} else{
    console.log('No');
}