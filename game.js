//constructor function selection random word
var Word = require("./word.js");


var Game = function(){
	this.hangWords = ["metal","hiphop","jazz","blues","country","reggae","pop"];

	this.randomWord = this.hangWords[ Math.floor(Math.random() * this.hangWords.length)];
	this.currentWord = new Word(this.randomWord);

}
	var hangMan = new Game();

	//console.log(hangMan.randomWord);
  // IT WORKS!!!

module.exports = Game;
