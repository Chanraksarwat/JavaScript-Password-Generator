//  Variables that store user inputs
var input;
var caseArray = [];
var lowerCaseChar;
var upperCaseChar;
var numberChar;
var symbolChar;

// create arrays for user input criteria
lowerCaseCharArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCaseCharArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
numbericCharArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
symbolCharArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];

var generatePassword = document.querySelector("#generate");

// generate password fuction
generatePassword.addEventListener("click", function () {
  password = createPassword();
  document.getElementById("password").value = password;
});

// Start function to generate password
function createPassword() {

  // Request user input
  input = parseInt(prompt("How many characters would you like your password? (Choose between 8 and 128)"));

  // Validate to make sure input was entered
  if (!input) {
    alert("Require input here");
  } else if (input < 8 || input > 128) {
    // prome user to with a warning massage and ask for for a new entry
    while (input < 8 || input > 128) {
      input = parseInt(prompt("You must choose between 8 and 128"));
    }

  }

    // continue if validation was true
    lowerCaseChar = confirm("Do you want to include lowercase characters?");
    upperCaseChar = confirm("Do you want to include uppercase characters?");
    numberChar = confirm("Do you want to include numeric characters?");
  symbolChar = confirm("Do you want to include special characters?");
  
  caseArray = [];
  // if all validation are trued store in case Array
  if (lowerCaseChar == true) {
    caseArray = caseArray.concat(lowerCaseCharArr);
  }

  if (upperCaseChar == true) {
    caseArray = caseArray.concat(upperCaseCharArr);
  }

  if (numberChar == true) {
    caseArray = caseArray.concat(numbericCharArr);
  }

  if (symbolChar == true) {
    caseArray = caseArray.concat(symbolCharArr);
  }

  var passwordString = "";
  // looping and picking random character for each array
  for (let i = 0; i < input; i++) {
    let randomIndex = parseInt(Math.floor(Math.random() * caseArray.length))
    let randomChar = caseArray[randomIndex]
    console.log(randomIndex, randomChar)
    passwordString += randomChar;
  
  }
  console.log(passwordString)
  return passwordString
};
