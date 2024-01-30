    /*

    Return true if this word is a palindrome. false if it is not. A palindrome is a word that is spelled the same backwards and forwards.

    For example:

    isPalindrom("a")
    returns true

    isPalindrom("noon")
    returns true

    isPalindrom("hello")
    returns false

    Treat spaces and uppercase letters normally—so “Racecar” wouldn’t be a palindrome since “R” and “r” aren’t the same letter:

    isPalindrom("Racecar")
    returns false

    isPalindrom("racecar")
    returns true

    */

    // Solution

    function palindrome(word){

        // calculates the middle index of the word
        const middle = Math.floor(word.length / 2);

        // iterates through the first half of the word (up to the middle index).
        for (let i = 0; i < middle; i++){

            // For each character at index i, it checks if it matches with the character at the symmetric position from the end.

            if(word[i] !== word[word.length - 1 -i]){
                return false; // If any pair of characters doesn't match, it returns false.
            }
        }
        return true;  // If all pairs match, it returns true.
    }

    console.log(palindrome("noon"))
    console.log(palindrome("a"))
    console.log(palindrome("Racecar"))
    console.log(palindrome("racecar"))
