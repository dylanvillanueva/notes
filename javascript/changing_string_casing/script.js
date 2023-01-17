var userName = prompt("What is your name?");

var firstChar = userName.slice(0, 1);
var firstCharUpper = firstChar.toUpperCase();
var restOfChars = userName.slice(1, userName.length);
var restOfCharsLower = restOfChars.toLowerCase();
var formattedName = firstCharUpper + restOfCharsLower;

alert("Hello, " + formattedName);