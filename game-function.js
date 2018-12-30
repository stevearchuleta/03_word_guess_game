//Grab reference to my DOM elements. use $ to remind me that these variables are, if fact, DOM elements.
var $newGameButton = document.getElementById('new-game-button');
var $placeholders = document.getElementById('placeholders');
var $guessedLetters = document.getElementById('guessed-letters');
var $guessesRemaining = document.getElementById('guesses-remaining');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');

//Create variables for game -- a wordBank, wins, losses, guessesRemaining, gameRunning, pickedWord, pickedWordPlaceholderArr, guessedLetterBank, incorrectLetterBank)
var wordBank = ['dahlia', 'zinnia', 'camellia', 'rose', 'petunia', 'azalea', 'begonia', 'carnation', 'narcissus', 'daisy', 'lilac', 'ivy', 'hyacinth', 'poppy', 'basil', 'violet', 'gardenia', 'sage', 'iris', 'holly', 'yarrow', 'jasmine', 'hazel', 'heather', 'marigold'];
var wins = 0;
var losses = 0;
var guessesRemaining = 8;
var gameRunning = false;
var pickedWord = '';
//the following are typed as an empty array so that the methods used on them can be recognized... for example: the method 'push' needs to recognize that the pickedWordPlaceholderArr is actually an arrary.
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];

//Create newGame function to reset all stats, pick new word, and create placeholders. This occurs when user presses button.
function newGame(){
  //STEP ONE: Reset all game stats/info
  gameRunning = true;
  guessesRemaining = 8;
  guessedLetterBank = [];
  incorrectLetterBank = [];
  pickedWordPlaceholderArr = [];

  //STEP TWO: Pick a new word by generating a random index via wordBank and wordBank.length; assign the new word to var pickedWord.
  pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

  //STEP THREE: Create placeholders from new pickedWord. Run a for-loop over the pickedWord. Use 'push' method to take into account: 1) any empty spaces in pickedWord, and 2) the underscores that represent letters in the pickedWord. 
  for(var i = 0; i<pickedWord.length; i++){
    if (pickedWord[i] === ' '){
      pickedWordPlaceholderArr.push(' ');
    } else{
      pickedWordPlaceholderArr.push('_');
    }
  }
//STEP FOUR: Manipulate/Write/Reset all newGame info/stats to the DOM. Again, use of $ is to remind me that that var is, indeed, a DOM element. .join method is used to convert pickedWordPlaceholderArr into a string, thereby not priniting the commas. 
$guessesRemaining.textContent = guessesRemaining;
$placeholders.textContent = pickedWordPlaceholderArr.join('');
$guessedLetters.textContent = incorrectLetterBank;
}

//Create letterGuess function, which takes in the letter pressed by user and compares that letter to those in the selected word from the word array.
function letterGuess(letter){
  console.log(letter);
    
    if(gameRunning === true && guessedLetterBank.indexOf(letter) === -1){
    //then run the game logic

    guessedLetterBank.push(letter);
    // Check if the guessed letter is within the pickedWord
    for(var i = 0; i<pickedWord.length; i++){
      //Convert both values to lower case in order to compare them correctly
      if(pickedWord[i].toLowerCase() === letter.toLowerCase()){
        //if these lowercase letters are a match, then swap out the character in the placeholder with the actual letter.
        pickedWordPlaceholderArr[i] = pickedWord[i];
      }
    }

    $placeholders.textContent = pickedWordPlaceholderArr.join('');
    checkIncorrect(letter);
    }
    else{
        if(gameRunning === false){
          alert("The game is not running. Click on the New Game button to start over.");
          }
          else{
          alert("You have already guessed this letter. Try a new one!");
          }
        }
      }



//Create checkIncorrect(letter) function
function checkIncorrect(letter){

  //if statement... so that if the user's guess is incorrect, this statement verifies that the user's letter (whether lowercase or uppercase) didn't make it into the pickedWordPlaceholderArr. 
  if(pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1 && 
  pickedWordPlaceholderArr.indexOf(letter.toUpperCase()) === -1) {
    
    //decrement guessesRemaining.
    guessesRemaining--;
   
    //Add the incorrect guess into the incorrectLetterBank.
    incorrectLetterBank.push(letter);
   
    //Write a new bank of incorrectly guessed letters to DOM.
    $guessedLetters.textContent = incorrectLetterBank.join(' ');
    
    //Write new amount of guessesRemaining to DOM
    $guessesRemaining.textContent = guessesRemaining;
  }
  checkLoss();
}
//Create checkLoss
function checkLoss(){
  if(guessesRemaining === 0){
    losses++;
    gameRunning = false;
    $losses.textContent = losses;
    $placeholders.textContent = pickedWord;
    
  }
  checkWin();
}
//Create checkWin
function checkWin(){
  if(pickedWord.toLowerCase() === pickedWordPlaceholderArr.join('').toLowerCase()){
    wins++;
    gameRunning = false;
    $wins.textContent = wins;
  }
}
//Add event listener to newGameButton from the DOM, reference the newGame function. When a user clicks the button, the newGame function runs as the callback.
$newGameButton.addEventListener('click', newGame);
//Add onkeyup event to trigger letterGuess
document.onkeyup = function(event){
  if(event.keyCode >= 65 && event.keyCode <= 90){
    letterGuess(event.key);
  }
}