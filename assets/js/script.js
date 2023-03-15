// Assignment code here

//   // 1. prompt the user for password criteria.
//   //    a. Password length 8 < 128
//   //    b. Lowercase, uppercase,numbers, special characters
//   // 2. validate the imput.
//   // 3. generate password based on criteria
//   // 4. display password on page.

// Get refere nces to the #generate element
var generateBtn = document.querySelector('#generate');
var output = document.querySelector('#password');

function showPassword(randomSelection) {
  output.innerText = randomSelection;
}

function generatePassword(optionsObj) {
  var special = ['!', '@', '#', '$', '%', '^', '&', '*', '?', '~'];
  var num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var lower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var upper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  var characterChoices = [];
  var characterList = [];

  if (optionsObj.special) {
    characterChoices = characterChoices.concat(special);
  } 

  if (optionsObj.num) {
    characterChoices = characterChoices.concat(num);
  } 

  if (optionsObj.lower) {
    characterChoices = characterChoices.concat(lower); 
  } 

  if (optionsObj.upper) {
    characterChoices = characterChoices.concat(upper);
  } 

  for (var c = 0; c < optionsObj.amount; c++) {
    var randomSelection = characterChoices[Math.floor(Math.random() * characterChoices.length)];
     
    characterList.push(randomSelection);
  }
      characterList = characterList.join('')
      showPassword(characterList); 
    } 

function writePassword() {
  var characterAmount = prompt('How may charaters would you like your password to contain? ie. 8-128');
  var parsedAmount = parseInt(characterAmount);
  var wantSpecial = confirm('Click OK to confirm special characters.');
  var wantNum = confirm('Click OK to confirm numeric characters.');
  var wantLower = confirm('Click OK to confirm including lowercase characters.');
  var wantUpper = confirm('Click OK to confirm including uppercase characters.');

var options = {
  amount: parsedAmount,
  special: wantSpecial,
  num: wantNum,
  lower: wantLower,
  upper: wantUpper
};

generatePassword(options)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

