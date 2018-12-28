//Grab reference to my DOM Elements
var $newGameButton = document.getElementById('new-game-button');
var $placeholders = document.getElementById('placeholders');
var $guessedLetters = document.getElementById('guessed-letters');
var $guessesRemaining = document.getElementById('guesses-remaining');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');
//Create variables for game -- a wordbank, wins, losses, guesses remaining, picked word, game in progress, picked word placeholder, guessed letter bank, incorrect letter bank)
var wordBank = [dahlia, zinnia, camellia, rose, petunia, azalea, begonia, carnation, narcissus, daisy, lilac, ivy, hyacinth, poppy, basil, violet, gardenia, sage, iris, holly, yarrow, jasmine, hazel, heather, marigold];
var wins = 0;
var losses = 0;
var guessesRemaining = 8;
var gameRunning = false;
var pickedWord = '';
var pickedWordPlaceholderArr = [];
var guessedLetterBank = [];
var incorrectLetterBank = [];

//Create newGame function to reset all stats, pick new word, and create placeholders

//Create letterGuess function, which takes in the letter pressed by user and compares that letter to those in the selected word from the word array

//Create checkIncorrect(letter)

//Create checkLose

//Create checkWin

//Add event listener for new game button

//Add onkeyup event to trigger letterGuess
