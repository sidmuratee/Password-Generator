// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowerCaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let UpperCaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let specialCharacter = ['!', '@', '#', '$', '%', '&', '*'] //special character options
let numericalCharacter = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] //number options


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let characterLimit = prompt("How many characters (8-128)?")

  let userOptions = [];

  let allowsForLowerCase = confirm("Do you want to include lowercase?")
  if (allowsForLowerCase) {
    userOptions = userOptions.concat(lowerCaseAlphabet);

  }
  let allowsForUpperCase = confirm("Do you want to include UPPERCASE?")
  if (allowsForUpperCase) {
    userOptions = userOptions.concat(UpperCaseAlphabet);

  }
  let allowsForNumericalCharacters = confirm("Do you want to include numerical characters?")
  if (allowsForNumericalCharacters) {
    userOptions = userOptions.concat(numericalCharacter);

  }
  let allowsForSpecialCharacters = confirm("Do you want to include special characters?")
  if (allowsForSpecialCharacters) {
    userOptions = userOptions.concat(specialCharacter)

  }

  let password = "";

  if ((userOptions.length > 0) && (characterLimit >= 8) && (characterLimit <=128))
  for (let i = 0; i < characterLimit; i++) {
    let randomNumber = Math.floor(Math.random() * userOptions.length);
    let randomLetter = userOptions[randomNumber];
    password += randomLetter

  }

  return password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
