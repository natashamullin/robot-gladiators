


// function to start a new game
var startGame = function () {
    //reset player stats
    playerInfo.reset();

    for (var i = 0; i < enemyInfo.length; i++) {
        //reset player stats
        playerInfo.health = 100;
        playerInfo.attack = 10;
        playerInfo.money = 10;

        if (playerInfo.health > 0) {
            window.alert("Welcome to Robot Gladiators!" + (i + 1));
            debugger;


            var pickedEnemyOBJ = enemyInfo[i];
            enemyHealth = 50;
            fight(pickedEnemy.name);

            // if we're not at thelast eemy in the array
            if (playerInfo.health > 0 && i < enemy.name.length - 1) {
                // ask if user wants to use the store before next round
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round");

                //if yes, take the to the store() function
                if (storeConfirm) {
                    shop();
                }

            }
        }
        else {
            window.alert("You have lost your robot in batle! Game Over!");
            break;
        }
    }
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
    var shop = function () {
        // ask player what they'd liek to do 
        var shopOptionPrompt = window.prompt(
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
        console.log("entered the shop");
        // use switch to carry out action
        switch (shopOptionPrompt) {
            case "REFILL":
            case "refill":
                playerInfo.refillHealth();
                break;
                if (playerinfo.money >= 7) {
                    window.alert("Refilling player's health by 20 for 7 dollars");

                    //increase health anddecreasemoney
                    playerInfo.health = playerInfo.health + 20;
                    playerInfo.money = playerInfo.money - 7;
                }
                else {
                    window.alert("you dont have enough money!")
                }
                break;
            case "UPGRADE": // new case
            case "upgrade":
                playerInfo.upgradeAttack();
                break;
                if (playerInfo.money >= 7) {
                    window.alert("Upgrading player's attackby 6 for7 dollars.");

                    //increase attack and decrease money
                    playerInfo.attack = playerInfo.attack + 6;
                    playerInfo.money = PlayerInfo.money - 7;
                }
                else {
                    window.alert("You don't have enough money!");
                }

                break;
            case "leave": // new case
            case "LEAVE":
                window.alert("Leave the store.");
                break;
            default:
                window.alert("You did not pick avalid option. Try again.");

                // call shop() again to force player to pickavalidoption
                shop();
                break;
        }
    };


    // play again
    startGame();
};

// pick new enemy to fight based on the index of the enemyNames array
var pickedEnemyObj = enemyNames[i];

// reset enemyHealth before starting new fight
enemy.health = 50;



var fightorskip = function ()  // repeat and execute as long as the enemy robot is alive
{


    while (enemy.health > 0 && playerInfo.heath > 0) {
        if (fightOrSkip()) {
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            break;
        }
        window.prompt("would you like to FIGHT or SKIP this battle? Enter 'fight' or 'skip' to choose");
        if (promptFight === "" || promptFight === null) {
            window.alert("you need to provide a validanswer! please try again.");
            return fightorskip();
        }

        // if player choses to skip
        promptFight = promptFight.toLowerCase();
        if (promptFight === "skip") {


            // confirm user wants to skip 
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        }
        else {
            window.alert("you need to pick a valid option. try again!");

            //if yes (true), leave fight 
            if (confirmSkip) {
                window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping
                playerInfo.money = math.max(0, playerInfo.money - 10);
                console.log("playerMoney", playerInfo.money);
                return true;
            }


        }


        // remove enemy's health by subtracting the amount set in the the playerAttack var
        enemy.health = enemy.health - palyerInfo.attack;
        console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + "now has " + enemy.health + " health remaining.");

        // check enemy's health 
        if (enemy.health <= 0) {
            window.alert(enemy.name + " has died!");
            // award player money for winning
            playerInfo.money = playerInfo.money + 20;
            // leave while() loop since enemy is dead
            return;


        }
        else { window.alert(enemy.name + " still has " + enemy.health + " health left."); }
        // remove players's health by subtracting the amount set in the enemyAttack variable
        playerInfo.health = playerInfo.health - enemy.attack;
        console.log(
            enemy.name + ' attacked ' + playerInfo.name + '. ' + playerInfo.name + ' now has ' + playerInfo.health + ' health remaining.'
        );


        if (playerInfo.health > 0) {


            // use debugger to pause script from running and check what's going on at that moment in the code


            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyObj);
        }

        else {
            window.alert("You have lost your robot in battle! Game Over!");
            return;
        }
        // check player's health
        if (playerInfo.health <= 0) { window.alert(playerInfo.name + " has died!"); return; }
        else { window.alert(playerInfo.Name + " still has " + playerInfo.health + " health left."); }

        // if no (false), ask question again by running fight () again
        fight();

    }


}
//Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
enemy.health = enemy.health - palyerInfo.attack
// Log a resulting message to the console so we know that it worked.
console.log(playerInfo.name + " attacked " + enemy.name + "." + enemy.name + " now has " + enemy.health + " health remaining. ");
// Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerInfo.health = playerInfo.health - enemy.attack;
// Log a resulting message to the console so we know that it worked.

console.log(enemy.names + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");


//put new code uder this
console.log(playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has" + enem.health + " health remaining.");

// check enemy'shealth
if (enemy.health <= 0) {
    window.alert(enemy.name + " has died!");
}
else {
    window.alert(enemy.name + " still has " + enemy.health + " health left. ");
}

// put new code under this
console.log(enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining.");

// check player's health
if (playerInfo.health <= 0) {
    window.alert(playerInfo.name + " has died!");
}
else {
    window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
}

// function to end the entire game
var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!")
    // if playeris still alive, player wins!
    if (playerinfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + " . ");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm("would you like to play again?");

    if (playAgainConfirm) {
        //restart the game 
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};


// stArt the game when the page reloads
var getPlayerName = function () {
    var name = "";
    while (name === "" || name === null) {
        name = prompt("what is your robot's name?");

    }
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function () {
        this.health = 100;
        this.money = 10;
        this.attack = 10;
        window.prompt("what is your robot's name?")
    },
    refillHealth: function () {
        if (this.money >= 7) {
            window.alert("refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money - + 7;
        }
        else {
            womdow.alert("you don't have enough money!")
        }
    },
    this.health += 20,
    this.money -= 7,
},
    upgradeAttack: function() {
        this.attack += 6;
this.money -= 7;}
    
};
var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(9, 15)
    },
    {
        name: "Amy Android",
        attack: randomNumber(9, 15)
    },
    {
        name: "Bobo Trumble",
        attack: randomNumber(9, 15)
    }
];
var enemy, health = 50;
startGame();
fight();
endGame();

