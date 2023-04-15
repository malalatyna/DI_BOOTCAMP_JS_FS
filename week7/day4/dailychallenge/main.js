//Daily Challenge: Groceries

let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

//Create an arrow function named displayGroceries, 
//that console.logs the 3 fruits from the groceries object. 
//Use the forEach method.

const displayGroceries = () => {
  groceries.fruits.forEach(fruit => {
    console.log(fruit);
  });
};
//Create another arrow function named cloneGroceries.
// Will we also see this modification in the user variable ? Why ?
//No modification; the two variables are independants
//when user becomes "Betty", the client="John" doesn't change

const cloneGroceries=()=>{ 
    let user = client;
    user="Betty";
    console.log(client);
//In the function, create a variable named shopping that is equal to the groceries variable.
const shopping=groceries;
//Change the value of the totalPrice key to 35$. 
//Will we also see this modification in the shopping object ? Why ?
//Yes, shopping and groceries are same objects
 
 shopping.totalPrice= "35$"
//Change the value of the payed key to false.
//yes,there is change in the two objects; shopping and groceries are same object
    shopping.other.payed=false
    console.log(shopping);
    console.log(groceries);
}
displayGroceries();
//Invoke the cloneGroceries function
cloneGroceries();
