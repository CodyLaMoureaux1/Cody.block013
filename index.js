//create 6 if/else statements that check f the value is true or false
//if the input is true output true
//if the output is false output false + the reason

if ("iamastring") {
    console.log("true");
  } else {
    console.log("false");
  }
  
  if (false) {
    console.log("true");
  } else {
    console.log("the bullion value false is falsy");
  }
  
  if (null) {
    console.log("true");
  } else {
    console.log("null value false is falsy");
  }
  
  if (undefined) {
    console.log("true");
  } else {
    console.log("undefined is falsy");
  }
  
  if (0) {
    console.log("true");
  } else {
    console.log("the number 0 is falsy");
  }
  
  if ("") {
    console.log("true");
  } else {
    console.log("the empty string is falsy");
  }


 //create a variable for num1
 //create a variable for num2
 //create a variable for sum = num1 + num2

 let num1 = 50
 let num2 = 51
 let sum = num1 + num2

 if(num1 + num2 >= 100){
    console.log(sum + "is greater than 100")
 } else {
    console.log(sum + "in not greater than 100")
 }

num1 = 99
num2 = -2
sum = num1 + num2

if(num1 + num2 > 0){
   console.log(sum + " is greater than 0")
} else {
   console.log(sum + " in not greater than 0")
}


num1 = 0
num2 = 101
sum = num1 + num2

if(num1 + num2 > 0){
   console.log(sum + " is greater than 100")
} else {
   console.log(sum + " in not greater than 100")
}

num1 = 500
num2 = -500
sum = num1 + num2

if(num1 + num2 === 0){
   console.log(sum + " is equal to 00")
} else {
   console.log(sum + " in not equal to 100")
}


num1 = -1000
num2 = 0
sum = num1 + num2

if(num1 + num2 <= 0){
   console.log(sum + " is a negative number")
} else {
   console.log(sum + " is not a negative number")
}

num1 = -5
num2 = 0
sum = num1 + num2

if(num1 + num2 <= 0){
   console.log(sum + " is a negative number")
} else {
   console.log(sum + " is not a negative number")
}

////////////////////////////////////////////////////////////

//this is my if else statement i decided to make a function to make it easier to solve 6 times
// if (num1 >= 5 && num2 >= 5){
//     console.log("true")
// } else {
//     console.log("false")
// }

num3 = 0
num4 = 0

function greater5 (num3,num4) {
  if (num3 >= 5 && num4 >= 5){
    console.log("true")
} else {
    console.log("false")
}
}

greater5 (5,6)

greater5 (10,11)

greater5 (0,0)

greater5 (1000,-1000)

greater5 (6,4)

greater5 (5,5)


// im going to use the or function to compare both pairs and see if one value is true

if ("cat" == "cat" || 6 == "6") {
  console.log("true");
} else {
  console.log("false");
}

if ("five" == 5 || "dog" == "dawg") {
  console.log("true");
} else {
  console.log("false");
}
if ( 0 == false || "horse" == "horse") {
  console.log("true");
} else {
  console.log("false");
}
if ("eight" == "eight" || "eight" == "eight") {
  console.log("true");
} else {
  console.log("false");
}
if ( 11 == "eleven" || "four" == "for") {
  console.log("true");
} else {
  console.log("false");
}
if ("cake" == "cake" || "pie" == "pie") {
  console.log("true");
} else {
  console.log("false");
}