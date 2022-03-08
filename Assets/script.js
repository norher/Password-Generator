// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", startPassword());


var lowerAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var uppperAlphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

var numberChoices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]

var yourPassword = []

function startPassword() {
  confirm("Let's get your password started\nWould you like lowercase letters?\nClick OK for yes, Cancel for no.")
}

function addUpper() {
  confirm("Okay, now, would you like Uppercase letters?")
}

function addNumbers() {
  confirm("Okay, now, would you like to add numbers?")
}

function addSpecial() {
  confirm("Okay, now, would you like special characters?")
}

function howLong() {
  prompt("Okay, finally, How long would you like your password to be? Pick any length, between 8 and 128")
}


// startPassword()
addUpper()
addNumbers()
addSpecial()
howLong()