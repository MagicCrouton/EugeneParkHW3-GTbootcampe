window.alert('Welcome, I will help you generate a strong password for you \n We will now choose what to include in your password')

var passLength = window.prompt('please enter desired password length\n(any number between 8-128)')
    if (isNaN(passLength) || !Number.isInteger(passLength) || passLength < 8 || passLength > 128) {
      for (let index = 0; index < 1; index=index+proceed) {
       var passLength = window.prompt('oops please enter an interger(whole number) between 8-128')
       if ((Number.isInteger(passLength) && passLength > 8 && passLength < 128)) {
        var proceed = 1
       }
       else if ((!Number.isInteger(passLength) || passLength < 8 || passLength > 128)) {
        var proceed = 0
       }
       else {
         var proceed = 0 
        }
      }
    }else
var includeCapital = window.confirm('Should I include\n uppercase letters?')
var includeLower = window.confirm('Should I include\n lowercase letters?')
var includeNum = window.confirm('should I include\nnumbers?')
var includeSpecial = window.confirm('should I include\nspecial characters?')

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
