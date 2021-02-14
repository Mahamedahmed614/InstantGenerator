// Assignment Code
var generateBtn = document.querySelector("#generate");


//instaniate my variables 
var confirmNumber;
var confirmSpecial;
var userInput;
var passwordLength;
var confirmLower;
var confirmUpper;

//now we call on our string of characters upper & lower case
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start Function
function generatePassword() {
  // Take user input
  passwordLength = prompt("Choose your password length from 8 - 128 characters");
  console.log("Password length " + passwordLength);
  
  //must meet criteria
  if(!passwordLength) {
    alert("Required value");

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passwordLength);
  
  } else { 
    confirmLower = confirm("Click OK to confirm if you would like to include lowercase characters");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Click OK to confirm if you would like to include uppercase characters");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Click OK to confirm if you would like to include numeric characters");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("Click OK to confirm if you would like to include special characters");
    console.log("Special Character " + confirmSpecial);

  };

  //work thru my if else statments to determine the output
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userInput = alert("You must choose a criteria");
 
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userInput = lowerCase.concat(upperCase, numbers, special);
    console.log(userInput);
  }

  else if (confirmLower && confirmUpper && confirmNumber) {
    userInput = lowerCase.concat(upperCase, numbers);
    console.log(userInput);
  }
  else if (confirmLower && confirmUpper && confirmSpecial) {
    userInput = lowerCase.concat(upperCase, special);
    console.log(userInput);
  }
  else if (confirmLower && confirmNumber && confirmSpecial) {
    userInput = lowerCase.concat(numbers, special);
    console.log(userInput);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    userInput = upperCase.concat(numbers, special);
    console.log(userInput);
  }
  
  else if (confirmLower && confirmUpper) {
    userInput = lowerCase.concat(upperCase);
    console.log(userInput);
  }
  else if (confirmLower && confirmNumber) {
    userInput = lowerCase.concat(numbers);
    console.log(userInput);
  }
  else if (confirmLower && confirmSpecial) {
    userInput = lowerCase.concat(special);
    console.log(userInput);
  }
  else if (confirmUpper && confirmNumber) {
    userInput = upperCase.concat(numbers);
    console.log(userInput);
  }
  else if (confirmUpper && confirmSpecial) {
    userInput = upperCase.concat(special);
    console.log(userInput);
  }
  else if (confirmNumber && confirmSpecial) {
    userInput = numbers.concat(special);
    console.log(userInput);
  }
  
  else if (confirmLower) {
    userInput = lowerCase;
    console.log(userInput);
  }
  else if (confirmUpper) {
    userInput = blankUpper.concat(upperCase);
    console.log(userInput);
  }
  else if (confirmNumber) {
    userInput = numbers;
    console.log(userInput);
  }
  else if (confirmSpecial) {
    userInput = special;
    console.log(userInput);
  };

  
  var passwordBlank = [];
  
 
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userInput[Math.floor(Math.random() * userInput.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  
  var password = passwordBlank.join("");
  console.log(password);
  return password;
  
}