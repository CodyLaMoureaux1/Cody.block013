

function onlyOdds(inputArray){      // here i am creating a function called onlyOdds that will exctract odd numbers from an array
    let oddNumbers = [];            // i needed to create a variable for oddNumber and since the output requires them to be in a new array i set them equal to and empty array - let oddNumbers = []; 

    for(let i = 0; i < inputArray.length; i++ ) {   // create a for loop that will scan the element of my function, the element will be an array of numbers
        if (inputArray[i] % 2 === 1){               // create a an if statement that will use modulus to determine if a number in the array is odd if so it will .push the number into the new array called oddNumbers[]
            oddNumbers.push(inputArray[i]);
    }
}
  return oddNumbers;                                // after the loop is complete it will return the oddNumbers into the new array
}
console.log(onlyOdds([2,4,6,8,11,20,15,22]));
console.log(onlyOdds([1,2,3,4,5,6,7,8,9,10]));
console.log(onlyOdds([70,42,55,81,21,91,34]));
console.log(onlyOdds([2,4,6,8,10,11,12]));


///////////////////////////////////////////////////////////////////////////////////////////////////////


function stringSorter(inputArray) {       // First I will create  a function thats purpose is to sort through a string and count the vowels and consonants

    let vowels = 0;                       // before i code my function I must create variables for vowels and consonants to store the numbers of each 
    let consonants = 0;                   
    
    for (let i = 0; i < inputArray.length; i++)        // because I am passing an array through my function i need to create a for loop to check each index and determine how many of each there is
        if(inputArray[i] === "a" || inputArray[i] == "e" || inputArray[i] == "i" || inputArray[i] == "o" || inputArray[i] == "u") { // I need to follow up with an if statement to determine for every [i] of the string is v or c 
            vowels ++                                  // if the [i] is equal to any of the 5 vowels incease the count of vowels by 1
        } else {                                       // else add 1 to the consonants variable
            consonants ++
        }
        console.log(inputArray, "has", consonants, "consonants and", vowels, "vowels.")    // I need to create a string that will display the initial string as well as how many vowels and consonants we count
    }
    
    stringSorter("hello");                        // running my function 5 times once for each string we input into it
    stringSorter("ukelele");
    stringSorter("awesome");
    stringSorter("onomonopia");
    stringSorter("textbook");


///////////////////////////////////////////////////////////////////////////////////////////////////////


    function arrayReverse(array){  // Create a functiong called arrayReverse that will take the input of x numbers and reverse the order and log that result
        const reversedArray = [];  // I need to create a new array that will store the reversedArray after the function flips it.
        
            for(let i = array.length - 1; i >= 0; i--) {        //to start my function i will create a for loop to check each number and reverse the order
                reversedArray.push(array[i]);                   //once the loop checks the array i need to push the new reverse array into its array that i declared at the start of the function
            }
        

            return reversedArray;                               // finally i need to return the values i have generated so that they can be used outside of the function
        }
        
        console.log(arrayReverse([1,2,3]));                     // I will console.log(arrayReverse([]));  for each set of values i need to input
        console.log(arrayReverse([1,3,5,7,9,11]));
        console.log(arrayReverse([20,50,30,60,200]));
        console.log(arrayReverse([1,-1,2,-3,5,-8,13]));



///////////////////////////////////////////////////////////////////////////////////////////////////////        
        
function fizzBuzz (number){                                        // I will start by creating a function called fizzbuzz and create an element called number that will be where i pass through the functions value to be applied
    for(let i = 1; i <= number; i++){                               // I need to create a for loop that starts at the index 1 and goes until it reaches the input number, after each pass add 1 and check the next index.
        if(i % 3 === 0  && i % 5 === 0) console.log("Fizz Buzz");   // i must first check if the index being checked is both divisable by 3 and 5. This must go first because my function runs in order
        else if (i % 5 === 0) console.log("Buzz");                  // If that fails i must check if the index is divisable by 5 and if true console the word Buzz
        else if (i % 3 ===0) console.log("Fizz");                   // If the previous else if fails i will check if divisable by 3 and if true console.log the word fizz
        else console.log(i);                                        // if all else fail i will just console the number of the index that we are checking. index 1 would print 1 since it is neither divisable by 3 or 5
    }     
}

fizzBuzz(100);                                                      // outside my function i will call my function with the input of 100 to test fizzBuzz from 1-100