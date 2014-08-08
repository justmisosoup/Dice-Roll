var diceSidesArray = new Array();
var diceSidesCount = 0;

function rollDice(maxSide) {
	return Math.floor(Math.random() * maxSide) + 1;
}

function rollDiceSum() {
	var diceSidesIndex = 0;
	var diceRollTotal = 0;
	
	// diceSidesIndex: 0, 1, 2, 3, ...
	// With each iteration of the loop,
	while (diceSidesIndex < diceSidesCount) {
		var diceRandom = rollDice(diceSidesArray[diceSidesIndex]);
		
		// take the random dice roll and add it to the total
		diceRollTotal += diceRandom; // diceRollTotal = diceRollTotal + diceRandom;

		// take the random dice roll and put it in the 'dice0', 'dice1', etc box on the screen.
        document.getElementById('dice' + diceSidesIndex).innerHTML = diceRandom; 
		
		diceSidesIndex++; 
	}
		
	// Try to find the object in the webpage first
    var diceRandomSum = document.getElementById('dicerandomsum');
    
    // If the dice random sum object doesn't exist, create it
    if (!diceRandomSum) {
        diceRandomSum = document.createElement('div');
        diceRandomSum.id = 'dicerandomsum';
        diceRandomSum.className = 'sum';
        document.getElementById('diesides').appendChild(diceRandomSum);
   }
    
    // Ok, now that we have a diceRandomSum object, set its innerHTML to the total	
    diceRandomSum.innerHTML = diceRollTotal;
}

function addDice() {
    var numSides = document.getElementById('sides').value;
    if (numSides < 2 || isNaN(numSides)) { 
        return;
    }
    
    numSides = Math.floor(numSides);
    diceSidesArray[diceSidesCount] = numSides;

    var newDie = document.createElement('div');
    newDie.id = 'dice' + diceSidesCount;
    diceSidesCount++;
    
    newDie.innerHTML = numSides;
    newDie.className = 'die';
    document.getElementById('diesides').appendChild(newDie);
}

function resetDice() {
    document.getElementById('diesides').innerHTML = "";
    diceSidesArray = new Array();
    diceSidesCount = 0;
}