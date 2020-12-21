// Arrays for possible character types to be used in generated password
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//Choose password length
function generateOptions() {
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
  
  //Variables to store selected character types
  var hasUpperCase = confirm("Click OK to include upper case characters");
  var hasLowerCase = confirm("Click OK to include lower case characters");
  var hasNumeric = confirm("Click OK to include numbers");
  var hasSpecial = confirm("Click OK to include special characters");

  //Loop to check if at least one variable is chosen
  if (hasUpperCase === false && hasLowerCase === false && hasNumeric === false && hasSpecial === false) {
      alert("You need to choose at least ONE character type");
      hasUpperCase = confirm("Click OK to include upper case characters");
      hasLowerCase = confirm("Click OK to include lower case characters");
      hasNumeric = confirm("Click OK to include numbers");
      hasSpecial = confirm("Click OK to include special characters");
      return;
    }

    //Object to store password choices
    var charTypes = {
      length: length,
      hasUpperCase: hasUpperCase,
      hasLowerCase: hasLowerCase,
      hasNumeric: hasNumeric,
      hasSpecial: hasSpecial,
    }

    return charTypes;

  }


  function generatePassword() {
    var options = generateOptions();
    var charOptions = [];
    console.log(charOptions)

    //Store selected characters in an array
    if (options.hasSpecial) {
      for (i = 0; i <specialCharacters.length; ++i){
        charOptions.push(specialCharacters[i]);
      }
    }

    if (options.hasUpperCase) {
      for (i = 0; i <upperCasedCharacters.length; ++i){
        charOptions.push(upperCasedCharacters[i]);
      }
    }
  

    if (options.hasLowerCase) {
      for (i = 0; i <lowerCasedCharacters.length; ++i){
        charOptions.push(lowerCasedCharacters[i]);
      }
    }
  
    if (options.hasNumeric) {
      for (i = 0; i <numericCharacters.length; ++i){
        charOptions.push(numericCharacters[i]);
      }
    }
  
    var resultRand = [];

    //Randomize selected characters and push them to array
    for (var i = 0; i < options.length; i++) {
      var randomizer = Math.floor(Math.random() * Math.floor(charOptions.length));
      resultRand.push(charOptions[randomizer]);
    }
    
    return resultRand.join('');
  }
  

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

