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

  // No answer then
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    usersChoices = alert("Please, select one ore more creteria to generate the password!");
  // 4 chosen options
  } else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    usersChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(usersChoices);
  }
  // 3 chosen options
  else if (confirmLower && confirmUpper && confirmNumber) { 
    usersChoices = lowerCase.concat(upperCase, numbers);
    console.log(usersChoices);
  }
  else if (confirmLower && confirmUpper && confirmSpecial) {
    usersChoices = lowerCase.concat(upperCase, special);
    console.log(usersChoices);
  }
  else if (confirmLower && confirmNumber && confirmSpecial) {
    usersChoices = lowerCase.concat(numbers, special);
    console.log(usersChoices);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    usersChoices = upperCase.concat(numbers, special);
    console.log(usersChoices);
  }
  // 2 chosen options
  else if (confirmLower && confirmUpper) {
    usersChoices = lowerCase.concat(upperCase);
    console.log(usersChoices);
  }
  else if (confirmLower && confirmNumber) {
    usersChoices = lowerCase.concat(numbers);
    console.log(usersChoices);
  }
  else if (confirmLower && confirmSpecial) {
    usersChoices = lowerCase.concat(special);
    console.log(usersChoices);
  }
  else if (confirmUpper && confirmNumber) {
    usersChoices = upperCase.concat(numbers);
    console.log(usersChoices);
  }
  else if (confirmUpper && confirmSpecial) {
    usersChoices = upperCase.concat(special);
    console.log(usersChoices);
  }
  else if (confirmNumber && confirmSpecial) {
    usersChoices = numbers.concat(special);
    console.log(usersChoices);
  }
  // 1 chosen option
  else if (confirmLower) {
    usersChoices = lowerCase;
    console.log(usersChoices);
  }
  else if (confirmUpper) {
    usersChoices = blankUpper.concat(upperCase);
    console.log(usersChoices);
  }
  else if (confirmNumber) {
    usersChoices = numbers;
    console.log(usersChoices);
  }
  else if (confirmSpecial) {
    usersChoices = special;
    console.log(usersChoices);
  };

  // Empty variable for the password lenght
  var passwordBlank = [];
  
  // Loop for random selection
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = usersChoices[Math.floor(Math.random() * usersChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Join and return the password 
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}