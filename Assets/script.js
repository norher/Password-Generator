//Made arrays of all the character required for the password

const lowerAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const upperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const numberChoices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "_"]

function addLower() {
  confirm("Let's get your password started\nWould you like lowercase letters?\nClick OK for yes, Cancel for no.");
};

function addUpper() {
  confirm("Okay, now, would you like Uppercase letters?");
};

function addNumbers() {
  confirm("Okay, now, would you like to add numbers?");
};

function addSpecial() {
  confirm("Okay, now, would you like special characters?");
};

function howLong() {
  prompt("Okay, finally, How long would you like your password to be? Pick any length, between 8 and 128");
};

function startPassword() {
  addLower();
  addUpper();
  addNumbers();
  addSpecial();
  howLong();
  return;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

  //     const length = +howLong.value;
//     const hasLower = addLower;
//     const hasUpper = addUpper;
//     const hasNumber = addNumbers;
//     const hasSpecial = addSpecial;
// }

// Add event listener to generate button
generateBtn.addEventListener("click", startPassword)


//Made functions for each special character

function getRandomLower() {
  return lowerAlphabet[Math.floor(Math.random(lowerAlphabet) * 26)];
}
function getRandomUpper() {
  return upperAlphabet[Math.floor(Math.random(upperAlphabet) * 26)];
}
function getRandomCharacter() {
  return specialCharacters[Math.floor(Math.random(specialCharacters) * 20)];
}
function getRandomNumber() {
  return numberChoices[Math.floor(Math.random(numberChoices) * 10)];
}

//Store functions within an object

const randomFunction = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  special: getRandomCharacter,
}

// console.log(getRandomCharacter());

//Dom Elements

const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');


// if (startPassword()==true) {
//   yourPassword.push(lowerAlphabet)
// }

//   const length = +howLong.value;
//   const hasLower = addLower;
//   const hasUpper = addUpper;
//   const hasNumber = addNumbers;
//   const hasSpecial = addSpecial;