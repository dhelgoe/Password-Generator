// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordlength;
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  passwordlength = prompt("How many characters would you like your password? 8-128");
  console.log("Password length" + passwordlength);


  
    if (passwordlength<8 || passwordlength>128);
    alert("Must be within 8-128 characters");

    else if()
  }
  
  
  
  

   





