// BUTTONS
var button = document.querySelector("#createChar");
var game = new Game("inactive");
var hero = new Actor();
var timer = new Timer("paused", gameRound);

button.addEventListener("click", function() {
  hero = createChar();
});

var buttonStart = document.querySelector("#startGame");
buttonStart.addEventListener("click", function() {
	game.changeState("search");
});

var buttonPause = document.querySelector("#pauseGame");
buttonPause.addEventListener("click", function() {
	game.changeState("inactive");
});

// CREATE MONSTER
var monster = new Monster();
console.log("Monster is: ", monster);

// CREATE HERO
function createChar() {
	var name = prompt("What is thy name?");
	hero = new Actor();
	hero.addName(name);
	console.log("Hero has a name", hero);
	return hero;
};

// function gameAction() {
// 	console.log("tick");
// 	var randomExpression = randomizer(1,100);
// 	console.log(randomExpression);

// 	if (game.state === "fight") {
// 		console.log("gamestate is ", game.state + " and so we fight!");
// 		game.fight(hero,monster);

// 	} else if (randomExpression < 59) {
// 		console.log("It's a FIGHT!");
// 		game.fight(hero,monster);
// 	} else if (randomExpression < 100) {
// 		console.log("It's a KISS!");
// 	} else {
// 		console.log("Smieszki he he");
// 	}
// };

function gameRound() {
	console.log("tick");
	var randomExpression = randomizer(1,100);

	if (game.state === "fight") {
		hero.attack(monster);
		if (monster.isAlive()) {
			monster.attack(hero);  
		}
	} else {
		if (randomExpression < 80) {
			monster = new Monster();
			game["state"] = "fight";
			console.log("A wild " + monster.name + " appears!");
		} else if (randomExpression < 100) {
			console.log("You tread carefully through the dungeon...");
		}
	}
};