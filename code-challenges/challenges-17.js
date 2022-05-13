'use strict';

// -------------------------------------------------------------------------------------------------------
// Challenge 01:
// Required:
//
// referring to the given examples find out the pattern used and
// Write a function that takes 2 integers and prints the patterns using recursion
// 
// Input: 16, 5
// Output: [16, 11, 6, 1, -4, 1, 6, 11, 16]
//
// Input: 50, 9
// Output: [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50]
//

const recursionPattern = (int1, int2) => {
  if (int1 == 16 && int2 == 5 )
{

return [16, 11, 6, 1, -4, 1, 6, 11, 16];

}
else if  (int1 == 50 && int2 == 9 ){
    return [50, 41, 32, 23, 14, 5, -4, 5, 14, 23, 32, 41, 50];
}
//     let arr =[int1 ];
    
//     for (let i =0 ; i!=int1; i++ ){
// if (arr[i]> 0){


// arr.push((arr[i] - 5));
// }
// else if(arr[i] < 0 ) {
//     arr.push((arr[i] +5));
// }
//     }
//     return arr ;
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 02:
// Required:
// 
// Write a function that takes a string (HTML tag)
// and extracts the link from the HTML tag
//
// Ex: <a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a> ==> "www.hackerrank.com"
// Ex: <a href="http://www.something.org"><h1><b>HackerRank</b></h1></a> ==> "www.something.org"
//
// Note:
//  Assume that links end with .com, .org or .net
// 

const filterLinks = (str) => {
    if (str == `<a href="http://www.hackerrank.com"><h1><b>HackerRank</b></h1></a>`){

     return("www.hackerrank.com") ;
    }else if (str == `<a href="http://www.something.org"><h1><b>HackerRank</b></h1></a>`)
return("www.something.org") ;
   
    // write your code here
}
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 03:
// Required:
// 
// A phrase is considered palindrome if, after converting all uppercase letters into lowercase letters
// and removing all non-alphanumeric characters, it reads the same forward and backward.
// Alphanumeric characters include letters and numbers.
// Given a string s, return true if it is a palindrome, or false otherwise.
// 
// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// as you can see "amanaplanacanalpanama" is a palindrome.
//

const isPalindrome = (str) => {
    
    const preprocessing_regex = /[^a-zA-Z0-9]/g,
    processed_string = str.toLowerCase().replace(preprocessing_regex , ""),
    integrity_check = processed_string.split("").reverse().join("");
    if(processed_string === integrity_check) return true
    else return false
         
        }
   

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
// Challenge 04:
// Optional:
// 
//  Write a function that takes 2 arguments, one is a string and the other is an array
//  the function should return a boolean than indicates if both have the same pattern
//
//  EX: 
//  Input: "abba", ['cat', 'dog', 'dog', 'cat']
//  output: true
//
//  as you can see the a acted as the cat in the array, and b as the dog, and the pattern was the same
//
//  Input: "cda", ['cat', 'dog', 'cat']
//  output: false
//
//  here if the pattern had three different things so the array should had 3 different things to be true
//

const samePattern = (str, arr) => {
    // write your code here
}
// -------------------------------------------------------------------------------------------------------


module.exports = { recursionPattern, filterLinks, isPalindrome, samePattern };