//Daily Challenge: Words In The Stars
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.

const sentence='Hello, World, in, a, frame, please';

const splitSentence = value =>{

    let result=value.split(',');
    result=trimEachWordOfSentenceArray(result);

    return result;
};

const trimEachWordOfSentenceArray = arr=>{

    return arr.map(str => {
        const trimedStr = str.trim();
        return trimedStr;
    });
}
const words=splitSentence(sentence);
console.log(words);

//find the longest word in array

// let maxWordLenght = 0;

// function findLongestWord(str){

// for (let i=0; i<=words.lenght; i++){

//   if(words[i].lenght<words[i+1].lenght){

//         maxWordLenght=words[i+1].lenght;
//     }else{
//         maxWordLenght=words[i].lenght;
//     }
 
//     }
// }

