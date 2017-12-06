//Constrctor function for the main game logic
var prompt = require("prompt");
var Game = require('./game.js');
var hangmanGame = new Game();
var userGuess = 10;


 //prompting user to start
 //console log for UX
console.log("**************************************")
console.log("WELCOME TO HANG MAN")
console.log(" ")
console.log("Guess a genre of music!")
console.log("**************************************")
	prompt.start();
	BeginGame(userGuess);

  //starting the game allowing user guess and letting the user know

		function BeginGame(guesses){
			console.log("Guesses left: " + guesses);
			if(hangmanGame.currentWord.comparingWords() == true){
				console.log("You win!!!! The Genre was: " + hangmanGame.randomWord);
				return;
			}
			//user out of guesses and game over
			if(guesses <= 0){
				console.log("Game Over! You are out of guesses");
				return;
			}

		// displaying "_"
		console.log(hangmanGame.currentWord.display());

	prompt.get(["theGuess"], function(err, result){
		if(err){
			return err;
		}
		//boolean for comparison
		if(hangmanGame.currentWord.foundIt(result.theGuess) == false){
			guesses --;
		}
		BeginGame(guesses);

	});
}
