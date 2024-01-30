/*

Code Challenge - Add To Zero

Given an array of numbers, console.log true if any two numbers in the array add to zero, otherwise log false.

For example:

    [1, 4, 11, 2, 37, -4] should log true because 4 and -4 add to 0.

    [0, 21, 33, 6, 0, -9] should log true because 0 and 0 add to 0.

    [0, 1, 2, 3, 4, 5] should log false because no two numbers add to 0.

*/

// Solution

function addToZero(arr){
    for(let i = 0; i < arr.length; i++){

        for (let j = i+1; j < arr.length; j++){
            // add summing up consecutive array numbers and comparing them to 0
            if((arr[i] + arr[j]) === 0){

                return true;
            }
        }
    }
    
    return false;
}

// Example usage:

const array1 = [1, 4, 11, 2, 37, -4] //should log true because 4 and -4 add to 0.
console.log(addToZero(array1))

const array2 = [0, 21, 33, 6, 0, -9] // should log true because 0 and 0 add to 0.
console.log(addToZero(array2))

const array3 = [0, 1, 2, 3, 4, 5] // should log false because no two numbers add to 0.
console.log(addToZero(array3))

