function Dice( numberOfDice, numberOfSides )
{
	//default the values to numberOfDice (1) and numberOfSides (6)
    this.numberOfDice  =  ( typeof numberOfDice == "undefined" ) ? 1 : numberOfDice;
	this.numberOfSides =  ( typeof numberOfSides == "undefined" ) ? 6 : numberOfSides;
	
    this.resultOfDice  = new Array();
    
	return this
	
}


//main functions ( build, shuffle, deal, add );
Dice.prototype.roll = function()
{
    var resultOfDice = new Array();
    var numberOfDice = this.getNumberOfDice();
    var numberOfSides = this.getNumberOfSides();
    
    for( i=0; i<numberOfDice(); i++)
	{
		//generate a random number between 1 and this.numberOfSides;
		var valueOfDice = Math.floor( (Math.random()*numberOfSides) + 1 );
		//store it in the array;
		resultOfDice[i] = valueOfDice;
	}
    
    this.setResultOfDice(resultOfDice);
}


//getters and setters;
//numberOfDice
Dice.prototype.getNumberOfDice = function()
{
	return this.numberOfDice;
}

Dice.prototype.setNumberOfDice = function( numberOfDice )
{
	this.numberOfDice = numberOfDice;
}

Dice.prototype.getNumberOfSides = function()
{
	return this.numberOfSides;
}

Dice.prototype.setNumberOfDice = function( numberOfDice )
{
	this.numberOfDice = numberOfDice;
}

Dice.prototype.getResultOfDice = function ()
{
    return this.resultOfDice;
}


Dice.prototype.setResultOfDice = function ( resultOfDice )
{
    this.resultOfDice = resultOfDice;
}



