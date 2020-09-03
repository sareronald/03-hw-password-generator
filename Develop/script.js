// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordOptions;
var userOptions;
var passwordArray;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Various Arrays
var lowerCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

var upperCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
var numericalCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

// Variable Declaration
var confirmLength = "";
var confirmLower;
var confirmUpper;
var confirmSpecial;
var confirmNumber;

// Prompt to confirm how many characters the user would like in their password - user input
function generatePassword() {
  confirmLength = prompt("How many characters would you like your password to contain?");

  // Loop if answer is lower than 8 or higher than 128 characters
  if (confirmLength <= 8 || confirmLength >= 128) {
    alert("Password length must be at least 8 characters. Try again.");
  }
  // If number is between 8 and 128 go to next prompt, else statement to determine the rest of the parameters of the password
  // continues once user input is validated
  else {
    confirmLower = confirm("Click OK if you want lowercase characters in your password.");
    confirmUpper = confirm("Click OK if you want uppercase characters in your password.");
    confirmSpecial = confirm("Click OK if you want special characters in your password.");
    confirmNumber = confirm("Click OK if you want numbers in your password.");
  }
  // if the user does not select any parameters for the password - alert?
  if (!confirmSpecial && !confirmNumber && !confirmUpper && !confirmLower) {
    alert("You must choose at least one character or number to generate a password.")
  }
  passwordOptions = {
    length: confirmLength,
    lowerCharacters: confirmLower,
    upperCharacters: confirmUpper,
    specialCharacters: confirmSpecial,
    numericalCharacters: confirmNumber
  };
// console.log(passwordOptions)
// call new password inside generatePassword Function so I can refer to length later
// I know what I need to do here, but am not sure how to code this information. 
//function passwordLength (arr) {
//  console.log(arr);
//call (passwordLength)
//};
}

// Build an object with all the info
// return the object above to use for generating password

function newPasswords(generation) {
  // get the object from above function
  userOptions = passwordOptions();

  var concatenatedArray = [];
  if (userOptions.lowerCharacters) {
    passwordArray = concatenatedarray.concat(lowerCharacters)
  }

  if (userOptions.upperCharacters) {
    passwordArray = concatenatedarray.concat(upperCharacters)
  }

  if (userOptions.specialCharacters) {
    passwordArray = concatenatedarray.concat(specialCharacters)
  }

  if (userOptions.numericalCharacters) {
    passwordArray = concatenatedarray.concat(numericalCharacters)
  }
}

// declare password array
// length is undefined (and I am not sure how to fix this) so the code below does not work. 
// var passwordArray = [];
// for (var i = 0; i <passwordOptions.length; i++) {
// console.log(passwordOptions)
// }

//return 
// declare password array
// var passwordArray.join('');

//document.getElementById("password").value = password OR querySelector
// Function to copy password to clipboard
function copyPassword() {
  document.getElementById("copy").select();
  document.execCommand("Copy")
  alert("Password copied to clipboard");
}


// Generator functions - http://www/net-comber.com/charset.html
// I found another way to determine random characters that is more streamlined
// than listing all the variables above, but am not quite sure how to use this
// just yet in JS - I understand the concept, but need a little more time to
// understand this fully.

//function getRandomLower() {
//  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
//}

//function getRandomUpper() {
//  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//}

//function getRandomNumber() {
//  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
//}

//function getRandomSpecial() {
//  const special ='@%+\/!#$^?:,(){}[]<>~-_.';
//  return special[Math.floor(Math.random() * special.length)];}
