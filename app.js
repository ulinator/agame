// BUTTONS
var button = document.querySelector("#createChar");
var game = new Game("inactive");
var hero;
var timer = new Timer("paused", gameAction);

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

function gameAction() {
	console.log("tick");
	var randomExpression = randomizer(1,100);
	console.log(randomExpression);

	if (randomExpression < 59) {
		console.log("It's a fight!");
		if ( game.fight(hero,monster) ) {
			game.fight(hero,monster);
		}

	} else if (randomExpression < 100) {
		console.log("It's a KISS!");
	} else {
		console.log("Smieszki he he");
	}
};