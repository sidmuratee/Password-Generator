// Assignment Code
let generateBtn = document.querySelector("#generate");

let lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let UpperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let specialCharacter = [ '!', '@', '#', '$', '%', '&', '*'] //special character options
let numericNum =[ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'] //number options


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
    let str = "";

    for (let i = 0; i < 100; i++) {
        let randomNumber = Math.floor(Math.random()*lowercaseAlphabet.length);
        let randomLetter = lowercaseAlphabet[randomNumber];
        password +=randomLetter;

    }

    return password;
return str;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
