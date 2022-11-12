window.alert('Welcome, I will help you generate a strong password for you \n We will now choose what to include in your password')
var passLength = window.prompt('please enter desired password length\n(any number between 8-128)')

// if (passLength < 8 || passLength > 128) {
//   var lengthCheck = false;
// }else if (isNaN(passLength)) {
//   var realNumb = false
// } else if (Number.isInteger(passLength)) {
//   var intCheck = false
// } else {}


// capital letter check and define
var includeCapital = window.confirm('Should I include\n uppercase letters?');

if (includeCapital) {
  var capLetters = ("ABCDEFGHIJKLMNOPQRXTUVWXYZ");
  var capLetter = capLetters.split("");
 }
 else {
  var capLetters =[];
 }
// capital letter check and define


// lowercase letter check and define
var includeLower = window.confirm('Should I include\n lowercase letters?')

if (includeLower) {
  var lowLetters = ("abcdefghijklmnopqrxtuvwxyz");
  var lowLetters = lowLetters.split("");
 }
 else {
  var lowLetters =[];
 }
 // lowercase letter check and define

 // number check and define
var includeNum = window.confirm('should I include\nnumbers?');

if (includeNum) {
  var numCharacters = ('1234567890');
  var numCharacters = numCharacters.split('');
}
else numCharacters = [];
 // number check and define

 // special character check and define
var includeSpecial = window.confirm('should I include\nspecial characters?')

if (includeSpecial) {
  var specialCharacters = (`!@#$%^&*()_+{}|:<>?[]`);
  var specialCharacters = specialCharacters.split('');
}
else specialCharacters = [];


// combine special characters into a pool that can be chosen from
var possibleChar = [...capLetter,...lowLetters,...numCharacters,...specialCharacters];

function generatePassword() {
var generatedPW = []
for (i=0; i < passLength; ++i) {
  generatedPW[i] = possibleChar[Math.round(Math.random()*possibleChar.length)];
}
var passwordText = generatedPW.join('');
return passwordText;
}

// this iterates the password pools and checks to see if one of it's elements are in the generated password and adds them to single variable for each type
// I'm checking only for a number greater than 0 in the next part.

function checkPW (generatedPW) {
var lowLetterValidate = 0
for (i=0; i < lowLetters.length; ++i) {
  var scan = generatedPW.includes(lowLetters[i])
  if (scan) {
    var lowLetterValidate = lowLetterValidate + 1;
  }
  else {
    var lowLetterValidate = lowLetterValidate + 0;
  }
}

var capLetterValidate = 0
for (i=0; i < capLetter.length; ++i) {
  var scan = generatedPW.includes(capLetter[i])
  if (scan) {
    var capLetterValidate = capLetterValidate + 1;
  }
  else {
    var capLetterValidate = capLetterValidate + 0;
  }
}

var numValidate = 0
for (i=0; i < numCharacters.length; ++i) {
  var scan = generatedPW.includes(numCharacters[i])
  if (scan) {
    var numValidate = numValidate + 1;
  }
  else {
    var numValidate = numValidate + 0;
  }
}

var specialCharValidate = 0
for (i=0; i < specialCharacters.length; ++i) {
  var scan = generatedPW.includes(specialCharacters[i])
  if (scan) {
    var specialCharValidate = specialCharValidate + 1;
  }
  else {
    var specialCharValidate = specialCharValidate + 0;
  }
}
}
// var passwordText = generatedPW.join('')
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
