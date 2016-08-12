// BUTTONS
var button = document.querySelector("#createChar");
var game = new Game("inactive");
var hero = new Actor();
var timer = new Timer("paused", gameRound);
var statbar = new Stats();
var display = new Display("#display");

button.addEventListener("click", function() {
	hero = createChar();
});

var buttonStart = document.querySelector("#startGame");
buttonStart.addEventListener("click", function() {
	game.changeState("search");
	timer.start(2000);
});

var buttonPause = document.querySelector("#pauseGame");
buttonPause.addEventListener("click", function() {
	game.changeState("inactive");
	timer.stop();
});

// CREATE MONSTER
var monster = new Monster();

// CREATE HERO
function createChar() {
	var name = prompt("What is thy name?");
	hero = new Actor();
	hero.addName(name);
	display.addLine("Hero has a name: " + hero.name);
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
	// console.log("tick");
	var randomExpression = randomizer(1,100);

	if (game.state === "fight") {
		game["fight"].continue();
		if (!monster.isAlive()) {
			game.changeState("search");
			game["fight"] = null;
		}
	} else if (game.state === "search") {
		if (randomExpression < 40) {

			monster = new Monster();
			monster.createMon(hero["lvl"]);
			game.changeState("fight");
			game["fight"] = new Fight(hero, monster);
			display.addLine("A wild " + monster.name + " appears!");
		} else if ( randomExpression < 100 ) {
			display.addLine("You tread carefully through the dungeon...");
			hero.healHP( hero["maxHP"]/15 );
		}
	}
};

// UPDATE SCROLL TO TOP AND STATBAR INTERVAL
window.setInterval(function() {
	var objDiv = document.querySelector('#display');
	objDiv.scrollTop = objDiv.scrollHeight;
	statbar.Update();
}, 20);
