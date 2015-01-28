## Synopsis

The dice.js library can be used to simulate rolling n number of dice with n number of sides.

## Code Example

//create the dice;
var dice = new Dice(6, 6);

//roll the dice;
dice.roll();
    
//get and store the result of the dice;
var diceResult = dice.getResultOfDice()

//loop over the results
for( i=0; i<diceResult.length; i++ )
{
    //add to the outputOfDice string;
    outputOfDice += diceResult[i] + " ";
}

//show me the money!;
alert( outputOfDice );
 
There is a full exampl in the index.html file in the repo.

## Motivation

I've been working on a lot of games/ideas on mobile with the Apache Cordova/Adobe PhoneGap framework and wanted to start share some of the basics that I've been using.

## Contributors

Kevin Schmidt
kevins@adobe.com
@kevpocalypse

