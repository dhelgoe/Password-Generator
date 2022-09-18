// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordlength;
var lowercasevalid;
var uppercasevalid;
var includespecial;
var includenumbers;
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


  
    if (passwordlength<8 || passwordlength>128) {
      alert("Must be within 8-128 characters");
    
    } else {
      includelowercase();
    }
}

  function includelowercase() {
    lowercasevalid = prompt("Would you like to include lowercase characters, Y or N?");
    console.log("Lower Case" + lowercasevalid);
    
    if (lowercasevalid == 'Y' || lowercasevalid == 'N'){
      includeuppercase();
    
    } else {
      alert("Please type Y or N");
    }

  

  }

  function includeuppercase() {
    uppercasevalid = prompt("Would you like to include uppercase characters, Y or N?");
    console.log("Upper Case" + uppercasevalid);

    if (uppercasevalid == 'Y' || uppercasevalid == 'N'){
      includespecialcharacters();

    } else {
      alert("Please type Y or N");
    }
  } 

  function includespecialcharacters() {
    includespecial = prompt("Would you like to include special characters, Y or N?");
    console.log("Special Characters" + includespecial);

    if (includespecial == 'Y' || includespecial == 'N'){
      includeanynumbers();

    } else {
      alert("Please type Y or N");
    }
  } 

  function includeanynumbers() {
    includenumbers = prompt("Would you like to include numbers, Y or N?");
    console.log("Numbers" + includenumbers);

    if (includenumbers == 'Y' || includenumbers == 'N'){
      questionsdone();

    } else {
      alert("Please type Y or N");
    }
  } 
  
  
  

  
  
  
  

   




