
//Exercises XP
//Exercise 1 : Information

// Instructions
// Part I : function with no parameters

// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.

function infoAboutMe(){
    console.log("My name is Malala and I like to play Piano")
}
infoAboutMe()

// Part II : function with three parameters
// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")

function infoAboutPerson(personName, personAge, personFavoriteColor)
{
 console.log("your name is", personName , ", you are " , personAge , "years old", "and your favorite color is", personFavoriteColor);
}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

// Exercise 2 : Tips
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.
// Inside the function, use prompt to ask John for the amount of the bill.

function calculateTip(){

    let amountBill = prompt("How much is the amount of bill in dollars")
    let amountBillInt=parseInt(amountBill)

    if (amountBillInt<50){
        // If the bill is less than $50, tip 20%.
        console.log("The total of bill is", amountBillInt+(amountBillInt*0.2));
    
    }else if 

    // If the bill is between $50 and $200, tip 15%.
        (amountBillInt<=200 && amountBill>=50) 
        {
            
            console.log("The total of bill is:", amountBillInt+(amountBillInt*0.15));
        }else
            {
                // If the bill is more than $200, tip 10%.
            
                console.log("The total of bill is:", amountBillInt+(amountBillInt*0.1));
            }
}
calculateTip()


//Exercise 3 : Find The Numbers Divisible By 23

// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.

function isDivisible(){
    let sum=0;
    for(let i=0; i<=500; i++){
      if((i%23)===0){
        // Console.log all the numbers divisible by 23.
        console.log(i);
        sum+=i;
      }
 }  
 console.log("The sum of all numbers that are divisible by 23 is:",sum);     
}
isDivisible()

// Bonus: Add a parameter divisor to the function.
function isDivisibleBonus(divisor){
    let sum2=0;
    for(let nbr=0; nbr<=500; nbr++){
      if((nbr%divisor)===0){
        // Console.log all the numbers divisible by the divisor.
        console.log(nbr);
        sum2+=nbr;
      }
 }  
 console.log(`The sum of all numbers that are divisible by ${divisor}, is:`,sum2);     
}
isDivisibleBonus(3)
isDivisibleBonus(45)

// Exercise 4 : Shopping List
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

// Add the stock and prices objects to your js file.

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

let shoppingList=["banana" , "orange" ,"apple"];

// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.

function myBill(){
    let totalPrice=0;
    for(const item of shoppingList){
        if((item in stock&&stock[item]>0)&&(item in prices)){
            totalPrice+=prices[item];
            stock[item]-=1;
        }
    }
    return totalPrice;
}

 console.log(`The total price of your shopping is`+ myBill());
 // Bonus: If the item is in stock, decrease the item’s stock by 1
 console.log(stock);


//  Exercise 5 : What’s In My Wallet ?

// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.

function changeEnough(itemPrice, amountOfChange){
    let amountInCents= (amountOfChange[0]*0.25)+(amountOfChange[1]*0.1)+(amountOfChange[2]*0.05)+(amountOfChange[3]*0.01);
    if(itemPrice<=amountInCents){
  
        return true;
    
    }else{
    
        return false;
    }
}

console.log(changeEnough(14.11, [2,100,0,0]));
console.log(changeEnough(0.75, [0,0,20,5]));


// Exercise 6 : Vacations Costs
// 1.Let’s create functions that calculate your vacation’s costs:
// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

function hotelCost(){
    let numberOfNights=parseInt(prompt("Please, enter the number of night you would like to stay in the hotel"));

    if(numberOfNights>0){
        let totalPriceHotel=140*numberOfNights;
        console.log("The total cost of your hotel stay is:" + totalPriceHotel);
        return totalPriceHotel;
    }else {
        console.log("Invalid input. Please enter a positive number of nights.");
        return 0;
    }
}


// 2.Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$


function planeRideCost(){

const destinations=[{"London": 183},{"Paris":220}, {"others": 300} ]
let placeToGo=prompt("Please, enter your destination!")
let placeToGoInLowerCase=placeToGo.toLowerCase();


    for(const destination of destinations){
        if (placeToGoInLowerCase === Object.keys(destination)[0].toLowerCase()){
            console.log(placeToGo, "costs:", destination[Object.keys(destination)[0]],"$");
            return destination[Object.keys(destination)[0]];
        }
    }
console.log("Destination not found");
return null;
}



// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

function rentalCarCost(){

    let numberOfDay=parseInt(prompt("Please, enter the number of days you would like to rent the car"));
    
    
    if(numberOfDay < 10){
       let totalPriceOfRent=40*numberOfDay;
        
        console.log("The car rental is:" + totalPriceOfRent);
     
    }else{ 
 
       totalPriceOfRent= 40*numberOfDay*0.95;
        console.log("The car rental is:" +totalPriceOfRent);  
         
    }
    return totalPriceOfRent; 
 }



//  Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

function totalVacationCost(){

    const carPrice=rentalCarCost();
    const hotelPrice=hotelCost();
    const planePrice=planeRideCost();

    console.log("The car cost:", carPrice);
    console.log("The hotel costs:", hotelPrice);
    console.log("The plane tickets cost:", planePrice);
   
    const totalPrice= carPrice+ hotelPrice+ planePrice
    console.log("total Price:", totalPrice)
}
totalVacationCost();