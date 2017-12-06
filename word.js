//Word Logic constructor
var Letter = require('./letter.js');

var Word = function(words){
	//empty array variables
	this.words = words;
	this.guessedWord = [];
	this.youWin = false;
	this.guesses = [];

	//Grabbing letter from word
	this.grabLetters = function(){
		for(var i = 0; i <this.words.length; i++){
			var theNewLetter = new Letter(this.words[i]);
			this.guessedWord.push(theNewLetter);

		}
	}
	this.grabLetters();
//grabbing letters to guess from array
	this.foundIt = function(guessLetter){
		for(var i = 0; i <this.guesses.length; i++){
			if(guessLetter == this.guesses[i]){
				return true;
			}
		}
		console.log(guessLetter);
		var added = false;

		this.guesses.push(guessLetter);

		for(var i = 0; i <this.guessedWord.length;i++){

			if(this.guessedWord[i].letterin(guessLetter)){
				this.guessedWord[i].showsLetter = true;
				added = true;
			}
		}
		return added;

	}
	//function for comparing words
 	this.comparingWords = function(){
 		for(var i = 0; i < this.words.length; i++){
 			if(this.words.charAt(i) != this.guessedWord[i].current){
 				return false;
 			}
 		}
 				return true;
 	}
//display empty string
	this.display = function(){
		var eString = "";

		for(var i = 0; i <this.guessedWord.length; i++){
			eString += this.guessedWord[i].current + " ";
		}
		return eString;
	}

}


module.exports = Word;
