/**
 Write a program that takes a string and
'repeats it' until the string's length is 
 greater than or equal to 10.
 */

 const prompt = require('prompt-sync')({sigint: true});
 
 const string = prompt("Enter a string: ");
 let repeatedString = string;

 while(repeatedString.length <= 10) {
       console.log(repeatedString);
      repeatedString = repeatedString + string;
 }
 
 console.log(string)