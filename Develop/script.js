// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Various Arrays
var numericalCharacter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
var specialCharacter = [
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

var upperCharacter = [
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

// Variable Declaration
var confirmLength = "";
var confirmSpecialCharacter;
var confirmNumericalCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Prompt to confirm how many characters the user would like in their password

// When I click the button to generate a password
// Then I am presented with a series of prompts

// No of charactersin a password - user imput
var passwordLength = prompt("How many characters would you like your password to contain?")
var charLower = confirm("Click OK if you want lowercase characters in your password.")
var charUpper = confirm("Click OK if you want uppercase characters in your password.")
var charSpecial = confirm("Click OK if you want special characters in your password.")
var charNumber = confirm("Click OK if you want numbers in your password.")

// If number is between 8 and 128 go to next prompt, if else
if (passwordLength){
  //if password length is less than 8
}
else {
  alert("Password length must be at least 8 characters.")
}

/* Generator functions - http://www/net-comber.com/charset.html
I found another way to determine random characters that is more streamlined
than listing all the variables above, but am not quite sure how to use this 
just yet in JS - I understand the concept, but need a little more time to
understand this fully. 
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecial() {
  const special ='@%+\/!#$^?:,(){}[]<>~-_.';
  return special[Math.floor(Math.random() * special.length)];
}
//console.log(getRandomSpecial());
*/
