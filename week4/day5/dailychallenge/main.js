

let numberOfCountDown=prompt("Please give a number to begin counting down bottles");

let numberOfCountDownInInt=parseInt(numberOfCountDown);



//   function countDown()
//   {
    // while(numberOfCountDownInInt<=99){
        
        for(let i=numberOfCountDownInInt; i>=2; i--) {
            for (let j=1; j<=numberOfCountDownInInt;j++){
            console.log(i,"bottles of beer on the wall");
            console.log(i,"bottles of beer");
            console.log("Take",j,"down, pass it around");
        }
    }
//     countDown(); 
// }           
 
