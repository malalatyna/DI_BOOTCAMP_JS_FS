
//Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”.
// Create a variable called wordNot where it’s value is the first appearance (ie. the position) of the substring “not”
// Create a variable called wordBad where it’s value is the first appearance (ie. the position) of the substring “bad” 

const sentence='The movie is not that bad, I like it!';
const posWordNot= sentence.indexOf('not');
const posWordBad= sentence.indexOf('bad');
console.log(posWordNot);
console.log(posWordBad);


// // If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// // For example, the result here should be : “The movie is good, I like it”
// // If the word “bad” does not come after “not” or the words are "not" in the sentence, console.log the original sentence.

if(posWordNot===-1)
{
    console.log(sentence);
}
else if(posWordNot<posWordBad){
    console.log(sentence.replace('not that bad', 'good'));
}   
else
{
    console.log(sentence);
}


   


