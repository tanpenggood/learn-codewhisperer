/**
 * Given a list that contains some numbers and strings, format them into a string
 * in which the numbers are prepended with "#" and the strings are wrapped in
 * double quotes.
 */

// Code snippet from c:\code\learn-codewhisperer\other\10-ways-to-build-applications\01_typing_less\example1.js
function formatList(list) {
    var formattedList = list.map(function (value) {
        if (typeof value === 'number') {
            return '#' + value;
        } else {
            return '"' + value + '"';
        }
    });
    return formattedList.join(', ');
}


var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var strings = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
var mixed = [1, 'two', 3, 'four', 5, 'six', 7, 'eight', 9, 'ten'];

console.log(formatList(numbers));
console.log(formatList(strings));
console.log(formatList(mixed));

// Output:
// #1, #2, #3, #4, #5, #6, #7, #8, #9, #10
// "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten"
// #1, "two", #3, "four", #5, "six", #7, "eight", #9, "ten"