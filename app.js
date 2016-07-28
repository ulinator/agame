// BUTTONS
var button = document.querySelector("#createChar");
var hero;
var timer = new Timer("paused", gameAction);

button.addEventListener("click", function() {
  hero = createChar();
});

var buttonStart = document.querySelector("#startGame");
buttonStart.addEventListener("click", function() {
	timer.tick(2000);
});

var buttonPause = document.querySelector("#pauseGame");
buttonPause.addEventListener("click", function() {
	timer.tickStop();
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

	if (randomExpression < 99) {
		console.log("It's a fight!");
		fight(hero,monster);
	} else if (randomExpression < 100) {
		console.log("It's a KISS!");
	} else {
		console.log("Smieszki he he");
	}
};


// FIGHT MECHANICS
function fight(attacker, defender) {
	var ticker = new Timer("paused", clash);
	timer.tickStop();

	var heroHP = hero.getHP();
	var heroAtt = hero.getAttack();
	console.log("hero HP ", heroHP + "hero Att: ", heroAtt);

	var monHP = monster.getHP();
	var monAtt = monster.getAttack();
	console.log("monster HP ", monHP + "monster Att: ", monAtt);

	var clashWinner = function(attacker,defender) {
		var val1 = attacker.getAttack();
		var val2 = defender.getAttack();

		if ( val1 > val2 ) {
			return attacker;
		} else if (val1 < val2 ) {
			return defender;
		} else {
			return null;
		}
	};

	var clash = function(attacker, defender) {
		if (clashWinner === attacker) {
			console.log("hero won");
			monHP = monHP - heroAtt;
			console.log("monster hp is down to: ", monHP);
		} else if (clashWinner === defender)  {
			console.log("monster won");
			heroHP = heroHP - monAtt;
			console.log("hero hp is down to: ", heroHP);
		} else {
			console.log("parry");
			return null;
		}
	};


	while ( (heroHP <= 0) || (monHP <= 0) ) {
		console.log("fight!");
		setTimeout(function(){
			console.log("fight round");
			// clash(hero, monster);
		}, 1000);
		// timer.tick(2000);
	};

};

