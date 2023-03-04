
//exercise 1: Your favorite food
    let myFavoriteFood="chocolate";
    let myFavoriteMeal="dinner";
    console.log("I eat", myFavoriteFood, "at every", myFavoriteMeal);

//Exercise 2: Series

 //Part I
    const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
    let myWatchedSeriesLengh=myWatchedSeries.length;

    let myWatchedSeriesSentence= `${myWatchedSeries[0]}, ${myWatchedSeries[1]}, and ${myWatchedSeries[2]}`;


    console.log("I watched", myWatchedSeriesLengh,"series:",myWatchedSeriesSentence);


  //Part II
    //Change the series “the big bang theory” to “friends”
    myWatchedSeries.splice(2,1,' friends');
    console.log(myWatchedSeries)

    //Add, at the end of the array, the name of another series you watched.
    myWatchedSeries.push('Stranger Things');
    console.log(myWatchedSeries)

    //Add, at the beginning of the array, the name of your favorite series.
    myWatchedSeries.unshift('Squid Game')
    console.log(myWatchedSeries);

    //Delete the series “black mirror”
    myWatchedSeries.splice(1,1);
    console.log(myWatchedSeries);

    //Console.log the third letter of the series “money heist”
    let str = " money heist ";
    console.log(str.substring(3,4));

    console.log(myWatchedSeries);


//Exercise 3: The Temperature Converter

    //Conversion in Fahrenheit
    let tempInCelsius=37;
    let tempInFahrenheit=((tempInCelsius/5)*9)+32;
    console.log(tempInFahrenheit);

//Exercise 4: Guess The Answers #1

        let c;
        let a = 34;
        let b = 21;

        console.log(a+b) //first expression
        // Prediction: It will output 55, because 34 and 21 are numbers
        // Actual:55

        a = 2;

        console.log(a+b) //second expression
        // Prediction: It will output 23, because the value of "a" has changed into 2, 2 and 21 are numbers
        // Actual: 23
        
        console.log(c);
        // Prediction: the value of c is "undefined", because there is no value assigned to it
        //Actual: undefined

        console.log(3 + 4 +`5`);
        //Prediction: It will output 75, because, 3 and 4 are numbers (3+4=7) and 5 is a string, that means 75 is the concatenation between 7 and '5'
        // Actual: 75
    
 //Exercise 5:Guess The Answers #2

        typeof(15)
       //Prediction: number (the data type of 15 'number')
        //actual: number
        console.log(typeof(15));

        typeof (5.5)
        // Prediction: number (the data type of 5.5 'number')
        //actual: number
        console.log(typeof(5.5));

        typeof(NaN)
        // Prediction: number (the data type of NaN is 'number')
        //actual: number
        console.log(typeof(NaN));

        typeof("hello")
        // Prediction: string (the data type of "hello" is "string")
        // Actual: string
        console.log(typeof("Hello"));

        typeof(true)
        // Prediction:boolean (the data type of true is boolean)
        // Actual: boolean
        console.log(typeof(true));

        typeof(1 != 2)
        // Prediction: boolean (comparaison between 1 and 2)
        // Actual: boolean
        console.log( typeof(1 != 2));

        "hamburger" + "s"
        // Prediction: hamburgers (concatenation of "hamburger" + "s")
        // Actual: hamburgers
        console.log( "hamburger" + "s");

        "hamburgers" - "s"
        // Prediction: NaN ("hamburgers" and "s" are not numbers)
        // Actual: NaN
        console.log("hamburgers" - "s")

        
        "1" + "3"
        // Prediction: 13 (concatenation of "1" and "3")
        // Actual:13
        console.log( "1" + "3")
        
        "1" - "3"
        // Prediction: NaN ("1" and "3" are not numbers)
        // Actual: -2
        console.log( "1" - "3");
        
        "johnny" + 5
        // Prediction: Johnny5 (concatenation)
        // Actual:Johnny5
        console.log( "johnny" + 5);
        
        "johnny" - 5
        // Prediction: NaN ("Johnny" is not a number)
        // Actual:
        console.log( "johnny" - 5);
        
        99 * "hello"
        // Prediction: NaN ("hello" is not a number)
        // Actual: NaN | NaN
        console.log( 99 * "hello");
        
        1 != 1
        // Prediction: false (returns to boolean)
        // Actual: false
        console.log( 1 != 1) ;
        
        1 == "1"
        // Prediction: true (returns to boolean, transformation of the operands in the same type before comparaison)
        // Actual: true 
        console.log( 1=="1") ;
        
        1 === "1"
        // Prediction:false (returns to boolean, same value but the type is different)
        // Actual: false
        console.log( 1 === "1");
        
    
//Exercise 6: Guess The Answers #3

        5 + "34"
        // Prediction:534 (coercion)
        // Actual: 534
        console.log(5 + "34");
        
        5 - "4"
        // Prediction:
        // Actual: 1 
        console.log(5 - "4");

        10 % 5
        // Prediction:0 (10 modulo 5)
        // Actual:0
        console.log(10 % 5);

        5 % 10
        // Prediction:5 (5 modulo 10)
        // Actual: 5
        console.log(5 % 10);

        "Java" + "Script"
        // Prediction: Javascript (concatenation)
        // Actual: Javascript
        console.log("Java" + "Script");
    
        " " + " "
        // Prediction: [empty string]
        // Actual: [empty string]
        console.log("" + "");


        " " + 0
        // Prediction: 0 
        // Actual: 0
            console.log(" " + 0);

        true + true
        // Prediction: 2    (true = 1 + true = 1)
        // Actual: 2
        console.log(true + true);

        true + false
        // Prediction: 1 (true = 1 + false =0)
        // Actual:1
        console.log(true + false);

        false + true
        // Prediction: 1 (false =0 + true = 1)
        // Actual:1
        console.log(false + true);

        false - true
        // Prediction: -1 (false = 0 + true = 1)
        // Actual: -1
        console.log(false - true);

        !true
        // Prediction: false (opposite of true is false)
        // Actual: false
        console.log(!true);

        3 - 4
        // Prediction: -1 (substraction)
        // Actual:-1
        console.log(3-4);

        "Bob" - "bill"
        // Prediction: NaN (not a number)
        // Actual: NaN
        console.log("Bob" - "bill");