/**
 *
 */

function add(a,b){
 return a+b;
}
// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a,b){
    "use strict";
    if (a>b){
    return a 
}
    else if (b>a){
    return b 
}

}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a,b,c){
    "use strict";
    return Math.max(a, b, c) 
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    "use strict";
    //...
    if (char === 'a'
        ||char === 'e'
        ||char ==='i'
        ||char ==='o'
        ||char ==='u'){
        return true;
    }
    return false;
}

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    "use strict";
    var result = []
    phrase.split('').forEach(function(c){
        if (!isVowel(c)){
            result.push(c)
            result.push(c)
            result.push('o')
        }
        else {
            result.push(c)
        }
    })
    return result.join('');
}

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(num){
    "use strict";
    var total = 0
    num.forEach(function(n){
        total = total + n
    })
    return total 
}

function multiply(num){
    "use strict";
    "use strict";
    var total = 1
    num.forEach(function(n){
        total = total * n
    })
    return total
    
}

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(s){
    "use strict";
    return s.split('').reverse().join('');
}

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words){
    "use strict";
    return words.reduce(function (a, b){ return a.length > b.length ? a: b;}).length    
}

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i){
    "use strict";
    var result = []
    words.forEach(function(w){
        if (w.length>i){
            result.push(w)
        }
    })
    return result
}

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string){
    "use strict";
    var result = {}
    string.split('').forEach (function(k){
        if (!result[k]){
            result [k] = 0
        }
        result[k] ++
    })
    return result
}
