//   if (howLong < 8 || howLong > 128) {
//     alert("Please select a number between 8 and 128");
//     howLong();
//   };
//   if (howLong !== Number) {
//     alert("Please select a number between 8 and 128");
//     howLong();
//   } else {
//     alert('Okay, your password will be that long');
//   };
// }

const lowerAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

const upperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const numberChoices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "_"];

var generatedPassword = '';

// Assignment Code
var generateBtn = document.querySelector("#generate");

// generate password function
function generatePassword() {
  var possiblePassword = '';

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
  
  var pwLength = +prompt('How long would you like your password to be?\n Please choose a number between 8 and 128')
  console.log(pwLength, typeof possiblePassword);

  let yourPassword = [];
  for (var i = 0; i < pwLength; i++) {
     yourPassword = yourPassword.concat(possiblePassword[Math.floor(Math.random() * possiblePassword.length)]);
  }
  console.log(typeof yourPassword);
  return yourPassword;
};

// Write password to the #password input
function writePassword() {
  var yourPassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = yourPassword;
  console.log(yourPassword);
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword)