// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", startPassword());


const lowerAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const upperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

let numberChoices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

var yourPassword = {
  length: 0,
  lower:["a"],
  upper:["A"],
  number:["1"],
  special:["!"],
};

function getRandomLower() {
  return lowerAlphabet[Math.floor(Math.random(lowerAlphabet) * 26)];
}
function getRandomUpper() {
  return upperAlphabet[Math.floor(Math.random(upperAlphabet) * 26)];
}

console.log(getRandomUpper());

getRandomLower()

// console.log(yourPassword);

// yourPassword.lower({lowerAlphabet});

// console.log(yourPassword);

// console.log(lowerAlphabet);

// console.log(upperAlphabet);

// console.log({
//   yourPassword:lowerAlphabet.concat(upperAlphabet)
// });

// console.log({
//   newPassword:yourPassword.concat(numberChoices)
// });



function startPassword() {
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


// startPassword()
// addUpper()
// addNumbers()
// addSpecial()
// howLong()


// if (startPassword()==true) {
//   yourPassword.push(lowerAlphabet)
// }
