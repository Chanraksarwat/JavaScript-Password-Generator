//  Variables that store user inputs
var input;
var caseArray = [];
var lowerCaseChar;
var upperCaseChar;
var numberChar;
var symbolChar;

// create arrays for user input criteria
lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
symbolChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "|", "[", "]", ";", "'", ":", "<", ">", "?", "/"];

var generatePassword = document.querySelector("#generate");

// generate password fuction
generatePassword.addEventListener("click", function () {
  password = createPassword();
  document.getElementById("password").placeholder = password;
});

// Start function to generate password
function createPassword() {

  // Request user input
  input = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  // Validate to make sure input was entered
  if (!input) {
    alert("Require input here");
  } else if (input < 8 || input > 128) {
    // prome us
    input = parseInt(prompt("You must choose between 8 and 128"));
  } else {
    // continue if validation was true
    lowerCaseChar = confirm("Do you want to include lowercase characters?");
    upperCaseChar = confirm("Do you want to include uppercase characters?");
    numberChar = confirm("Do you want to include numeric characters?");
    symbolChar = confirm("Do you want to include special characters?");
  }

  // if all validation are trued store in case Array
  if (useLowerCase == true) {
    caseArray.push(lowerCaseChar);
  }

  if (useUpperCase == true) {
    caseArray.push(upperCaseChar);
  }

  if (useNumeric == true) {
    caseArray.push(numericChar);
  }

  if (useSpecial == true) {
    caseArray.push(specialChar);
  }
  
  for (let i = 0; i < passwordLength; i++) {

    let randomCharArrayNum;
    let selectedCharArray;
    let randomCharNum;
    let randomChar;

    randomCharArrayNum = parseInt(Math.floor(Math.random() * caseArray.length));
    selectedCharArray = caseArray[randomCharArrayNum];
    randomCharNum = Math.floor(Math.random() * selectedCharArray.length);
    randomChar = selectedCharArray[randomCharNum];
    passwordString += randomChar;
  }
    passwordEntry.textContent = passwordString;
};
  