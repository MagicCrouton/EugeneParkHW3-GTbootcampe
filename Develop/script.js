// window.alert('Welcome, I will help you generate a strong password for you \n We will now choose what to include in your password')

var passLength = window.prompt('please enter desired password length\n(any number between 8-128)')

var lengthCheck = true

if (passLength < 8 || passLength > 128) {
  var lengthCheck = false;
}else if (isNaN(passLength)) {
  var lengthCheck = false
} else if (Number.isInteger(passLength)) {
  var lengthCheck = false
} else {
  var lengthCheck = true
}

// int i = false
// while (i=false) {
//   var passLength = window.prompt('oops please enter desired password length\n(any number between 8-128)')
//   if (passLength > 8 && passLength < 128 && !isNaN(passLength)) {
//     var i = true
//   }
//   else {
//     var i = false
//   }
// }

// } else {}

// var includeCapital = window.confirm('Should I include\n uppercase letters?')
// var includeLower = window.confirm('Should I include\n lowercase letters?')
// var includeNum = window.confirm('should I include\nnumbers?')
// var includeSpecial = window.confirm('should I include\nspecial characters?')


// // let i = false
// // while (i=false) {
// //   var passLength = window.prompt('oops please enter an integer(whole number) between 8-128')
// //        if ((!Number.isInteger(passLength) && passLength > 8 && passLength < 128)) {
// //        let i = true
// //        }
// //         else
// // } else {}



// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
