var generateBtn = document.querySelector("#generate");
// Variables created based on 5 different parameters 
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var usersChoices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Var To Upper Case 
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;   

}

// Add event listener fot the button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  // Ask four user's input
  passwordLength = prompt("Please, select the length of the password between 8 and 128 characters.");
  console.log("Password length " + passwordLength);
  
  if(!passwordLength) {
    alert("Please, input required value");s

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Password must contain at least 8 and at the most 128 characters.");
    console.log("Password length " + passwordLength);
  
  } else { 
    confirmLower = confirm("Would you like to include lower case letters?");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Would you like to include UPPER case letters?");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Wpuld you like to include numbers?");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("Would you like to include special characters?");
    console.log("Special Character " + confirmSpecial);

  };

