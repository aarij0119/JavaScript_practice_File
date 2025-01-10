// This is my js practice file and I ma running this through nodejs
//Reverse the string

// Question 1
/*function reversestring(string){
   return string.split('').reverse().join('')
}

console.log(reversestring("hello"))*/

//Question 2
//Finding Sum of array
/*function sumofArray(numbers){
    let sum  = 0
     for(let i = 0; i < numbers.length; i++ ){
        sum +=  numbers[i]
     }
     return sum
}

console.log(sumofArray([0,2,3,5,6,7]))*/

//Question 3
// FindGreatest Number in array 
/*function GraetesNumber(Numbers){
    let greatestNo = Numbers[0]; // here the greatest no is 1 because it is 0 element in array
    for(let i = 0; i < Numbers.length; i++){
       if(Numbers[i] > greatestNo){
        greatestNo = Numbers[i]
       }
    }
    return greatestNo
}
console.log(GraetesNumber([1000,200,3,20,50]))*/

// Question 5 part = (1)
/*const numbers = [1, 2, 3, 4, 5];
const maxNumber = Math.max(...numbers);
console.log(maxNumber); // Output: 5*/

// Question 4
// Find Lowest no in array
/*function lowestNo(numbers){
    let lowestNo = numbers[0]
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i] < lowestNo){
            lowestNo = numbers[i]
        }
    }
    return lowestNo
}
console.log(lowestNo([1000,200,300,400,500]))*/

// uses of forEach

//Date 08|12|2024

/*let arr = [1,2,3,4,5,6,7,8,9,10];

arr.forEach(function(val){
        console.log(val)
        console.log("hello world")
})*/

// If else conditions

/*function findgrade(score){
    if(score > 100 || score < 0 ){
        console.log("Invalid Score")
    }else if(score >= 90){
        console.log("Congratulation! Your grade is A", score)
    }else if(score >= 80){
        console.log("Your Grade is B", score)
    }else if(score >= 70){
        console.log("Your Grade is C", score)
    }else if(score >= 34){
        console.log("Your grade is D", score)
    }else if(score <= 33){
        console.log("your grade is f you are fail", score)
    }
}
findgrade(33)*/
/*function findLargest(a, b, c) {
    if (a >= b && a >= c) {
      return `greatest no is ${a}`;
    } else if (b >= a && b >= c) {
      return `greatest no is ${b}` ;
    } else {
      return "greatest no is", c;
    }
  }
  
  // Test cases:
  console.log(findLargest(5, 10, 3)); // 10
  console.log(findLargest(7, 7, 3));  // 7
  console.log(findLargest(-1, -5, -10)); // -1*/

/*function isvowels(string){
    for(let i = 0; i < string.length; i++){
        if(string[i] === 'a' || string[i] === 'e' || string[i] === 'i' || string[i] === 'o' || string[i] === 'u'){
            console.log("Vowels is", string[i])
        }
        // console.log(string[i])
    }
    
}
  
 isvowels("aarij")*/
 
 /*function checkNumber(num) {
    if (num > 0) {
      return 'Positive';
    } else if (num < 0) {
      return 'Negative';
    } else {
      return 'Zero';
    }
  }
  
  // Test cases:
  console.log(checkNumber(10)); // Positive
  console.log(checkNumber(-5)); // Negative
  console.log(checkNumber(0));  // Zero*/


// FIND DUPLICATE NUMBERS IN AN ARRAY

// function finduplicate(arr){
//   let duplicate = [];
//   let counts = {};
//   arr.forEach(function(val){
//     // console.log("hello", val)
//     counts[val] = (counts[val] || 0) + 1 // it will increase the key vaku of object
//     console.log("count value ", counts)
//     if(counts[val] === 2){
//       duplicate.push(val)
//     }
//   })
//   return duplicate;
// }

// console.log(finduplicate([1,2,2,3,4,5,6,6]))


// What is Declaration?
//Declaration var a = initialize 10 this is 

// Var is global is scope. How?
// Let and const is block scope.
/*function find(){
  if(true){
    // let a = 12 
    // const a = 10
    var a  = 12
  }{
    // it will show a is not defined we declare it under curley brushes same will come if you use const
    // but if use var it not show any error because var is globar variable. 
    console.log(a)
  }
}
find()*/


// console in js
//to show warning in js
// console.warn("You are not alloewed on this web.");
// to show error
// console.error("You are not alloewed on this web.");
// to print anything
// console.log("You are not alloewed on this web.");


// const abcd = (a,b,c) => a + b + c; // Example of using the parameter
// console.log(abcd(5,3,5)); // 12

/*const obj = {
  name: "bisleri",
  color: "Tranparent",
  material: "Plastic",
  reuseable: true
}

for(let val in obj){
  console.log(val, obj[val])
}*/

// Blank array 


// INTERVIEW QUESTIONS

// Q1. What are the differences between var, let, and const?

// var a = 10; // Initial declaration
// console.log(a);
// a = 12; // Reassigning to a new value
// console.log(a);
// var a = 20;
// console.log(a);

//Ans = var we can initilise and  redeclare, reassign

// let b =  10;
// console.log(b);
// b = 30;
// console.log(b);
// let b = 40; // Here is redeclare
// console.log(b) // So now it will show an error of redeclare because b has been already initialise

//Ans = So, We can reassign the value of "let" but we can't redeclare the value of "let"

// const c = 20;
// console.log(20); // output wil be 20;

// c = 30;
// console.log(c); // It will show an error that can't reassign the value of "c";

// const c = 40;
// console.log(c); // It will show an error that can't redeclare the value of "c";

// Ans = So, diffrenece between var,let,const, var we can initilise redeclare and reassign the value of var but in "let" we can't redeclare but we can reassign the value but in const we can't redecaler even can't reassign the value and const,let are scope variable;


// Question 2 =  What is a Closure?

//A closure is a function that has access to its own scope, the scope of the outer function, and the global scope. In other words, a closure allows a function to access variables from an outer function's scope even after the outer function has returned.

// function outsider(){
//     let outsider = "Outsider";

//     function innerSider(){
//         console.log(outsider)
//     }
//     return innerSider
// }v 

// const clouser = outsider()
// clouser() 

//Question  = 3  What is a Promise?
//A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states:

//Pending: The initial state, neither fulfilled nor rejected.

//Fulfilled: The operation completed successfully.

//Rejected: The operation failed.

// QUESTION = 4 How does this keyword work in JavaScript?

//Global Context
//console.log(this); // In browser, this refers to `window`

// const person = {
//     name: 'John',
//     greet: function() {
//         console.log(this.name);
//     }
// };

// person.greet(); // Outputs: John


