//constructor for letter function
var Letter = function(letter){
  this.current = "_"
	this.theLetters = letter;
	//letter appears
	this.showsLetter = false;
	this.letterin = function(letter){
		if(this.theLetters == letter){
			this.current = this.theLetters;
			return true;
		}
			return false;
	}
//method for the "_" to appear
	this.letterShows = function(){
		return this.current;
	}
};
module.exports = Letter;
