/* 
Code Challenge - Find Lucky Numbers

Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

You can trust that this function will never be called with n < 0 or n > 10. 
*/

// Solution

function luckyNumber(n){
    let result = [];
    while(result.length < n){

        // math.floor() rounds a number DOWN to the nearest integer
        // so, to get a result 1-10 a random number multiplay by 10 and add 1

        const randomNumber = Math.floor(Math.random() * 10) + 1; // random numbers between 1-10

        if(!result.includes(randomNumber)){ // if a number is not include push to the array
            result.push(randomNumber);
        }
    }
    return result;
}

// example  

console.log(luckyNumber(6))
console.log(luckyNumber(2))