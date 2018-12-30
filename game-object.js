//Grab reference to DOM elements. use $ to remind that these are DOM elements.
var $newGameButton = document.getElementById('new-game-button');
var $placeholders = document.getElementById('placeholders');
var $guessedLetters = document.getElementById('guessed-letters');
var $guessesRemaining = document.getElementById('guesses-remaining');
var $wins = document.getElementById('wins');
var $losses = document.getElementById('losses');
//All of the logic is now written within this one object. var game = { }
var game = {
  wordBank: ['dahlia', 'zinnia', 'camellia', 'rose', 'petunia', 'azalea', 'begonia', 'carnation', 'narcissus', 'daisy', 'lilac', 'ivy', 'hyacinth', 'poppy', 'basil', 'violet', 'gardenia', 'sage', 'iris', 'holly', 'yarrow', 'jasmine', 'hazel', 'heather', 'marigold'],
  wins: 0,
  losses: 0,
  guessesRemaining: 8,
  gameRunning: false,
  pickedWord: '',
  pickedWordPlaceholderArr: [],
  guessedLetterBank: [],
  incorrectLetterBank: [],
  newGame: function(){

    this.gameRunning = true;
    this.guessesRemaining = 8;
    this.guessedLetterBank = [];
    this.incorrectLetterBank = [];
    this.pickedWordPlaceholderArr = [];

   
    this.pickedWord = this.wordBank[Math.floor(Math.random() * this.wordBank.length)];

    
    for(var i = 0; i<this.pickedWord.length; i++){
      if (this.pickedWord[i] === ' '){
        this.pickedWordPlaceholderArr.push(' ');
      } else {
        this.pickedWordPlaceholderArr.push('_');
      }
  }

$guessesRemaining.textContent = this.guessesRemaining;
$placeholders.textContent = this.pickedWordPlaceholderArr.join('');
$guessedLetters.textContent = this.incorrectLetterBank;
  },
  letterGuess:function(letter){
    if(this.gameRunning === true && this.guessedLetterBank.indexOf(letter) === -1){
      
      this.guessedLetterBank.push(letter);
      

      for(var i = 0; i<this.pickedWord.length; i++){
        
        if(this.pickedWord[i].toLowerCase() === letter.toLowerCase()){
          
          this.pickedWordPlaceholderArr[i] = this.pickedWord[i];
        }
      }
      $placeholders.textContent = this.pickedWordPlaceholderArr.join('');
      
      this.checkIncorrect(letter);
      } else {
          if(this.gameRunning === false){
            alert("The game is not running. Click on the New Game button to start over.");
          } else {
            alert("You have already guessed this letter. Try a new one!");
            }
          }
  },
  checkIncorrect:function(letter){ 
    
    
    if(this.pickedWordPlaceholderArr.indexOf(letter.toLowerCase()) === -1 && 
    this.pickedWordPlaceholderArr.indexOf(letter.toUpperCase()) === -1) {
      this.guessesRemaining--;
      this.incorrectLetterBank.push(letter);
      $guessedLetters.textContent = this.incorrectLetterBank.join(' ');
      $guessesRemaining.textContent = this.guessesRemaining;
    }
    this.checkLoss();
  },
  checkLoss: function(){
    if(this.guessesRemaining === 0){
      this.losses++;
      this.gameRunning = false;
      $losses.textContent = this.losses;
      $placeholders.textContent = this.pickedWord; 
    }
    this.checkWin();
  },
  checkWin: function(){
    if(this.pickedWord.toLowerCase() === this.pickedWordPlaceholderArr.join('').toLowerCase()){
      this.wins++;
      this.gameRunning = false;
      $wins.textContent = this.wins;
    }
  }
};


$newGameButton.addEventListener('click', function(){
  game.newGame();
});

document.onkeyup = function(event){
  if(event.keyCode >= 65 && event.keyCode <= 90){
    game.letterGuess(event.key);
  }
};