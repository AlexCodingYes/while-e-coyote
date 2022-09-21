const prompt = require('prompt-sync')({sigint: true});

let num = Number(prompt("Enter a value for 'n': "));
let x = 0;

let prevNumber = 0;
let currentNumber = 1;
let total = 0;

console.log(prevNumber);

while(x < num){
    console.log(currentNumber)
    total = prevNumber + currentNumber;
    prevNumber = currentNumber;
    currentNumber = total;
    x++;
}