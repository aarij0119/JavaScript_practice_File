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

