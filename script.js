// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// Array of special characters to be included in password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Array of uppercase characters to be included in password
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//Choose password length
function generatePassword() {
  var length = prompt
  ("Choose a length for your password.");

  //Regular expression to confirm that a number has been entered
  while(!/^[0-9]+$/.test(length)) {
    alert("Invalid input. Password length must be a number!");
    length = prompt("Please enter a number.");
    }

  //Conditional statement to confirm that password length is at least 8 characters long and less than 128 characters
  if (length < 8 || length > 128) {
    length = prompt("Length must be 8-128 characters. How many characters would you like for your password?");
  }
  




  
 



var charTypes = [specialCharacters, numericCharacters, upperCasedCharacters, lowerCasedCharacters];
window.alert([]);

//Generate password after selecting criteria


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


