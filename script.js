// Assignment Code

// Initializing all variables 
var generateBtn = document.querySelector("#generate");
var lowercaseCharacter = "abcdefghijklmnopqrstuvwxyz";
var uppercaseCharacter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberCharacter = "0123456789";
var specialCharacter = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var pwdLegnth;
var uppercasePwdCheck;
var numberPwdCheck;
var specialPwdCheck;

//Function used to determine the length of the password
function determineLength(){
    pwdLegnth = prompt("Choose how long your password needs to be (should be between 8 -128 characters) ");

    if (pwdLegnth < 8 || pwdLegnth > 128) {
        alert("Password length must be a number between 8-128 characters");
        determineLength();
    } else if (isNaN(pwdLegnth)) {
        alert("Password length must be a number between 8-128 characters");
        determineLength();
    }
    return pwdLegnth;
}

//Function used to see if the user wants to include uppercase characters in the password
function isUppercase(){
    uppercasePwdCheck = prompt("Do you want to include uppercase letters in your password? (Yes or No)");
    uppercasePwdCheck = uppercasePwdCheck.toLowerCase();

    if (uppercasePwdCheck === null || uppercasePwdCheck === ""){
      alert("Please answer Yes or No");
      isUppercase();

    }else if (uppercasePwdCheck === "yes" || uppercasePwdCheck ==="y"){
        uppercasePwdCheck = true;
      return uppercasePwdCheck;

    }else if (uppercasePwdCheck === "no" || uppercasePwdCheck ==="n"){
        uppercasePwdCheck = false;
      return uppercasePwdCheck;
    
    }else {
      alert("Please answer Yes or No");
      isUppercase();
    }
    return uppercasePwdCheck;
}

//Function used to see if the user wants to include numbers in the password
function isNumbers(){
    numberPwdCheck = prompt("Do you want to include numbers in your password? (Yes or No)");
    numberPwdCheck = numberPwdCheck.toLowerCase();

    if (numberPwdCheck === null || numberPwdCheck === ""){
      alert("Please answer Yes or No");
      isNumbers();

    }else if (numberPwdCheck === "yes" || numberPwdCheck ==="y"){
        numberPwdCheck = true;
      return numberPwdCheck;

    }else if (numberPwdCheck === "no" || numberPwdCheck ==="n"){
        numberPwdCheck = false;
      return numberPwdCheck;
    
    }else {
      alert("Please answer Yes or No");
      isNumbers();
    }
    return numberPwdCheck;
}

//Function used to see if the user wants to include special characters in the password
function isSpecial(){
    specialPwdCheck = prompt("Do you want to include special characters in your password? (Yes or No)");
    specialPwdCheck = specialPwdCheck.toLowerCase();

    if (specialPwdCheck === null || specialPwdCheck === ""){
      alert("Please answer Yes or No");
      isSpecial();

    }else if (specialPwdCheck === "yes" || specialPwdCheck ==="y"){
        specialPwdCheck = true;
      return specialPwdCheck;

    }else if (specialPwdCheck === "no" || specialPwdCheck ==="n"){
        specialPwdCheck = false;
      return specialPwdCheck;
    
    }else {
      alert("Please answer Yes or No");
      isSpecial();
    }
    return specialPwdCheck;
}

 //Function used to take all the input from the previous functions and generate a password using a random number generator 
    function generatePassword(){
        determineLength();
        console.log(pwdLegnth);
        isUppercase();
        console.log(uppercasePwdCheck);
        isNumbers();
        console.log(numberPwdCheck);
        isSpecial();
        console.log(specialPwdCheck);

    var characters = lowercaseCharacter;
    var password = "";
    if (uppercasePwdCheck && numberPwdCheck && specialPwdCheck){
    characters += uppercaseCharacter + numberCharacter + specialCharacter;

    }else if (uppercasePwdCheck && numberPwdCheck){
    characters += uppercaseCharacter + numberCharacter;

    }else if (numberPwdCheck && specialPwdCheck){
    characters += numberCharacter + specialCharacter;

    }else if (uppercasePwdCheck && specialPwdCheck){
    characters += uppercaseCharacter + specialCharacter;

    }else if (uppercasePwdCheck){
    characters += uppercaseCharacter;

    }else if(numberPwdCheck){
    characters += numberCharacter;

    }else if (specialPwdCheck){
    characters += specialCharacter;

    }else{
    characters === lowercaseCharacter;
    }

  for(var i = 0; i < pwdLegnth; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}
// Write password to the #password input
function writePassword() {
    var password1 = "";
    password1 = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password1;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);