//Exercise 1 : Favorite Color

let sentence = ["my","favorite","color","is","blue"];
let sentence1=sentence.join(" ");

console.log(sentence1);
//other method
console.log (sentence[0], sentence[1], sentence[2], sentence[3], sentence[4]);

//Exercise 2 : Mixup

let str1 = "mix";
let str2 = "pod";

// 2. Slice out and swap the first 2 characters of the two strings from part 1.

// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).

// 4. Finally console.log the new concatenated string.*

new1=str1.slice(0, 2);
new2=str2.slice(0, 2);
console.log(new2+(str1.slice(2,3)) +" "+ new1+(str2.slice(2,3)));

// //Exercise 3: Calculator

const firstNbr = prompt("Please enter the first number:");
num1=parseFloat(firstNbr);

const secondNbr = prompt("Please enter the second number:");
num2=parseFloat(secondNbr);
sum=num1+num2;
diff=num1-num2;
 
console.log(sum);
alert ("We made the sum of the two numbers");
//difference between the two numbers
console.log(diff);