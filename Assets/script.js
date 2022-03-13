//Made functions for each special character
// Maybe don't need this at all
// function getRandomLower() {
//   return lowerAlphabet[Math.floor(Math.random(lowerAlphabet) * 26)];
// }

// function generatePassword() {
  //   var possiblePassword = [];
  
  //   length();
  //   hasNumbers();
  //   if (hasNumbers) {
  //     possibleCharacters = [...possibleCharacters, ...numberChoices];

  //   if (possibleCharacters.length < 8) return "Please choose a number between 8 and 128";
  //   if (possibleCharacters.length > 128) return "Please choose a number between 8 and 128";
  
  //   for (let i = 0; i < length; i++){
  //     Math.floor[math.random(possibleCharacters) * possibleCharacters.length];
  //   }
  //   return "Yay";
  // }

function length() {
  prompt("Let's get your password started\nHow long would you like your password.");
  // if (length < 8) {
  //   alert("Please select a number between 8 and 128");
  // }
  // if (length > 128) {
  //   alert("Please select a number between 8 and 128");
  // }
  // if (length !== Number) {
  //   alert("Please select a number between 8 and 128");
  // }
  hasLower();
}

const lowerAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const upperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const numberChoices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "_"];

// const pwLength = howLong()

var yourPassword = "";

function generatePassword() {
  let possiblePassword = [];
  console.log(possiblePassword);
  if (confirm('would you like uppercase?\nClick Ok for yes, or Cancel for No') == true) {
    possiblePassword = possiblePassword.concat(upperAlphabet);
  };
  console.log(possiblePassword);
  if (confirm('would you like lowercase?') == true) {
    possiblePassword = possiblePassword.concat(lowerAlphabet);
  };
   console.log(possiblePassword);
  if (confirm('would you like specialCharacter?') == true) {
    possiblePassword = possiblePassword.concat(specialCharacters);
  };
    console.log(possiblePassword);
  if (confirm('would you like numbers?') == true) {
    possiblePassword = possiblePassword.concat(numberChoices);
  };
  console.log(possiblePassword);
  let pwLength = prompt('How long would you like your password to be?\n Please choose a number between 8 and 128 ');
  console.log(pwLength.length);
  };

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword)