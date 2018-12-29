//Grab reference to my DOM Elements
var $newGameButton = document.getElementById('new-game-button');
var $placeholders = document.getElementById('placeholders');
var $guessedLetters = document.getElementById('guessed-letters');
var $guessesRemaining = document.getElementById('guesses-remaining');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');
//Create variables for game -- a wordbank, wins, losses, guesses remaining, picked word, game in progress, picked word placeholder, guessed letter bank, incorrect letter bank)
var wordBank = ['dahlia', 'zinnia', 'camellia', 'rose', 'petunia', 'azalea', 'begonia', 'carnation', 'narcissus', 'daisy', 'lilac', 'ivy', 'hyacinth', 'poppy', 'basil', 'violet', 'gardenia', 'sage', 'iris', 'holly', 'yarrow', 'jasmine', 'hazel', 'heather', 'marigold'];
var wins = 0;
var losses = 0;
var guessesRemaining = 8;
var gameRunning = false;
var pickedWord = '';
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];

//Create newGame function to reset all stats, pick new word, and create placeholders
function newGame(){
  //Reset all game stats/info
  gameRunning = true;
  guessesRemaining = 8;
  guessedLetterBank = [];
  incorrectLetterBank = [];
  pickedWordPlaceholderArr = [];

  //Pick a new word
  pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];

  //Create placeholders from new pickedWord
  for(var i = 0; i<pickedWord.length; i++){
    if (pickedWord[i] === ' '){
      pickedWordPlaceholderArr.push(' ');
    } else{
      pickedWordPlaceholderArr.push('_');
    }
  }
//Write all new game info/stats to the DOM
$guessesRemaining.textContent = guessesRemaining;
$placeholders.textContent = pickedWordPlaceholderArr.join('');
$guessedLetters.textContent = incorrectLetterBank;
}

//Create letterGuess function, which takes in the letter pressed by user and compares that letter to those in the selected word from the word array
function letterGuess(letter);{
  console.log(letter);
  if(gameRunning === true && guessedLetterBank.indexOf(letter) === -1){
    //This is part of the game logic
    guessedLetterBank.push('letter');
    //Check if the guessed letter is within the picked word
    for(var j = 0; j<pickedWord.length;j++){
      //Convert both values to lower case in order to compare them correctly
      if(pickedWord[i].toLowerCase()===letter.toLowerCase()){
        pickedWordPlaceholderArr[i]==pickedWord[]
      }
    }
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

//Create checkIncorrect(letter)

//Create checkLose

//Create checkWin

//Add event listener for new game button
$newGameButton.addEventListener('click', newGame);
//Add onkeyup event to trigger letterGuess
