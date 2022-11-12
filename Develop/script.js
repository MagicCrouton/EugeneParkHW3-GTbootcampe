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
  var specialCharacters = (`!@#$%^&*()_+{}|:"<>?[]`);
  var specialCharacters = specialCharacters.split('');
}
else specialCharacters = [];


// combine special characters into a pool that can be chosen from
var possibleChar = [...capLetter,...lowLetters,...numCharacters,...specialCharacters];

var generatedPassword = []
for (i=0; i < passLength; ++i) {
  generatedPassword[i] = possibleChar[Math.round(Math.random()*possibleChar.length)];
}

// function generatePassword () {

// }

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
