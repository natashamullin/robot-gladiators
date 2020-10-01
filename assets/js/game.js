var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100;
var palyerAttack = 10;
var playerMoney = 10;
var enemyHealth = 50;
var enemyAttack = 12;
var enemyNames = ["Roborto", "Amy Android", "robo Trumble"];
// function to start a new game
var startGame = function () {
    for (var i = 0; i < enemyNames.length; i++) {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    
        if (playerHealth > 0) {
            window.alert("Welcome to Robot Gladiators!" + (i +)
            );

            var pickedEnemyName = enemyNames[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in batle! Game Over!");
            break;
        }
    }
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
    // play again
    startGame();
};

// function to end the entire game
var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!")
    // if playeris still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " = playerMoney = " . ");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("would you like to play again?")
    
    if (playAgainConfirm) {
        //restart the game 
        startGame ();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};




// pick new enemy to fight based on the index of the enemyNames array
var pickedEnemyName = enemyNames[i];

// reset enemyHealth before starting new fight
enemyHealth = 50;



var fight = function (enemyNames)  // repeat and execute as long as the enemy robot i alive
    while (enemyHealth > 0 && playerHeath > 0) {
    var promptFight = window.prompt("would you like to FIGHT or SKIP this battle? Enter 'fight' or 'skip' to choose");

    // if player choses to skip
} else if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm user wants to skip 
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave fight 
    if (confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
    }
}

// remove enemy's health by subtracting the amount set in the the playerAttack var
enemyHealth = enemyHealth - palyerAttack;
console.log(playerName + " attacked " + enemyName + ". " + enemyName + "now has " + enemyHealth + " health remaining.");

// check enemy's health 
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
    // award player money for winning
    playerMoney = playerMoney + 20;

    // leave while() loop since enemy is dead
    break;

}
else { window.alert(enemyName + " still has " + enemyHealth + " health left."); }
// remove players's health by subtracting the amount set in the enemyAttack variable
playerHealth = playerHealth - enemyAttack;
console.log(
    enemyName + ' attacked ' + playerName + '. ' + playerName + ' now has ' + playerHealth + ' health remaining.'
);

if (playerHealth > 0) {


    // use debugger to pause script from running and check what's going on at that moment in the code
    debugger;

    // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
    fight(pickedEnemyName);
}

else {
    window.alert("You have lost your robot in battle! Game Over!");
    break;
}
// check player's health
if (playerHealth <= 0) { window.alert(playerName + " has died!"); break; }
else { window.alert(playerName + " still has " + playerHealth + " health left."); }

    }
};

    // if no (false), ask question again by running fight () again
   else fight();
   
}
 
else {
    window.alert("you need to pick a valid option. try again!");
}
//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemyHealth = enemyHealth - palyerAttack
// Log a resulting message to the console so we know that it worked.
console.log(playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining. ");
// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;
  // Log a resulting message to the console so we know that it worked.
};
console.log(enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");


//put new code uder this
console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has" + enemyHealth + " health remaining.");

// check enemy'shealth
if (enemyHealth <= 0) {
    window.alert(enemyName + " has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left. ");
}

// put new code under this
console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

// check player's health
if (playerHealth <= 0) {
    window.alert(playerName + " has died!");
}
else {
    window.alert(playerName + " still has " + playerHealth + " health left.");
}
fight();
// stArt the game when the page reloads
startGame();