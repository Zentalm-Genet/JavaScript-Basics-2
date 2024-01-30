/*
Has Unique Characters

Given a word, return true if that word contains only unique characters. Return false otherwise.

For example:

hasUniqueChars("Monday")
    returns true

hasUniqueChars("Moonday")
    returns false

Uppercase and lowercase letters should be considered separately:

hasUniqueChars("Bob")
    returns true
*/

// Solution
function hasUniqueChars(char) {

    for (let i = 0; i < char.length; i++) {

        for (let j = i + 1; j < char.length; j++) {

            if (char[i] === char[j]) {
                return false;
            }
        }
    }
    return true;
}

console.log(hasUniqueChars("Bob"));  // true
console.log(hasUniqueChars("Moonday"));  // false
console.log(hasUniqueChars("Monday"));  // true



