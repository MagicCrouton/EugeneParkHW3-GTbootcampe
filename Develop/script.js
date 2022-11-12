
// This function prompts user and if chosen adds the character set to the possibleChar array. then generates a password 
// using a random number generatory math.random thats been rounded with math.round
function generatePassword() {

  window.alert('Welcome, I will help you generate a strong password for you \n We will now choose what to include in your password')
  var passLength = window.prompt('please enter desired password length\n(any number between 8-128')
  // if (passLength<8 || passLength>128 || isNaN(passLength)){
  //   var passLength = window.prompt('oops, please enter desired password length\n(any number between 8-128')
  //   var passValidate = 0
  //   for (i=0; i=1; i = passValidate) {
  //       if (passLength<8 || passLength>128 || isNaN(passLength)) {
  //       var passLength = window.prompt('again, please enter desired password length\n(any number between 8-128')
  //       }
  //       else {
  //       var passValidate = 1;
  //       }
  //   }
  // }

  var includeCapital = window.confirm('Should I include\n uppercase letters?');
      // capital letter check define
      if (includeCapital) {
        var capLetters = ("ABCDEFGHIJKLMNOPQRXTUVWXYZ");
        var capLetters = capLetters.split("");
      }
      else {
        var capLetters =[];
      }
      // capital letter check definee

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
    var possibleChar = [...capLetters,...lowLetters,...numCharacters,...specialCharacters];
      var generatedPW = []
      
      for (i=0; i < passLength; ++i) {
        generatedPW[i] = possibleChar[Math.round(Math.random()*possibleChar.length)];
      }
//this section calls up the checkPW function that checks to see one of every character set chosen is in the password if not it randomizes again 
// check again
  if (checkPW (generatedPW,includeCapital,includeLower,includeNum,includeSpecial,capLetters,lowLetters,numCharacters,specialCharacters)) {
    var passwordText = generatedPW.join('');
    return passwordText;
  }
  else {
    var passValidate = 0
    for (i=0; i=1; i = passValidate) {
      for (i=0; i < passLength; ++i) {
        generatedPW[i] = possibleChar[Math.round(Math.random()*possibleChar.length)];
      }
        if (checkPW (generatedPW,includeCapital,includeLower,includeNum,includeSpecial,capLetters,lowLetters,numCharacters,specialCharacters)) {
        var passValidate = 1;
        var passwordText = generatedPW.join('');
        return passwordText;
        }
        else {
        var passValidate = 0
        }
    }
  }
}
//end password generate function


// function for checking if the desired characters are in the  generated PW
// if user chose not to use a certain character set the function makes the validation var 1 so that 
// it does not affect the outcome of the challenge at the bottom the function
function checkPW (generatedPW,includeCapital,includeLower,includeNum,includeSpecial,capLetters,lowLetters,numCharacters,specialCharacters) {
  if (includeCapital) {
  var capLetterValidate = 0
  for (i=0; i < capLetters.length; ++i) {
    var scan = generatedPW.includes(capLetters[i])
    if (scan) {
      var capLetterValidate = capLetterValidate + 1;
    }
    else {
      var capLetterValidate = capLetterValidate + 0;
    }
  }
  }
  else {
    var capLetterValidate = 1
  }
  
  if(includeLower) {
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
  }
  else {
    var lowLetterValidate =1
  }
  
  if (includeNum) {
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
  }
  else {var numValidate = 1
  }
  
  if (includeSpecial) {
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
  else {specialCharValidate = 1
  }
  
  // challenge step multiplies the values together if any of the sections failed the challenge result will be 0
  // if there is any value above 0 it passes the validation.
  var challenge = capLetterValidate*lowLetterValidate*numValidate*specialCharValidate
  if (challenge > 0) {
    var challengeResult = true
  }
  else {
    var challengeResult = false
  }
  
  return challengeResult;
  }
// end pw check function


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
