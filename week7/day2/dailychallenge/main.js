//Daily challenge: Go Wildcats

const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

//Create an array using forEach that contains all the usernames from the gameInfo array

const usernames = [];

gameInfo.forEach(function(e) {
  usernames.push(e.username + "!");
});

console.log(usernames);

//Create an array using forEach that contains the usernames of all players with a score bigger than 5.
 
const winners= [];
gameInfo.forEach(function(element){
if (element.score>5){
    winners.push(element.username);
}
});
console.log(winners);

// Find and display the total score of the users. (Hint: The total score is 71)
let totalScore=0;
gameInfo.forEach(function(e){
    score=e.score;
    totalScore = totalScore + score
  }
);
console.log(totalScore);
   
