// BUTTONS
var button = document.querySelector("#createChar");
var hero;
var timer = new Timer("paused", gameAction);

button.addEventListener("click", function() {
  hero = createChar();
});

var buttonStart = document.querySelector("#startGame");
buttonStart.addEventListener("click", function() {
	timer.tick();
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
}

function compare(att1,att2) {
	if ( att1.attack() != att2.attack() ) {
		return Math.max(att1, att2);
	} else {
		console.log("draw");
		return null;
	}
}

// FIGHT MECHANICS
function fight(hero, monster) {
	var heroHP = hero["hp"];
	var heroAtt = hero.attack();
	console.log("hero HP ", heroHP + "hero Att: ", heroAtt);

	var monHP = monster["hp"];
	var monAtt = monster.attack();
	console.log("monster HP ", monHP + "monster Att: ", monAtt);

	if ( (heroHP > 0) && (monHP > 0) ) {
		console.log("Attaaaaack!");
		var clashWinner = compare(heroAtt,monAtt);

		if (clashWinner === heroAtt) {
			console.log("hero won");
			monHP = monHP - heroAtt
			console.log("monster hp is down to: ", monHP);
		} else if (clashWinner === monAtt)  {
			console.log("monster won");
			heroHP = heroHP - monAtt;
		} else {
			console.log("parry");
		}

	} else if (heroHP <= 0) {
		console.log("You died.");
	} else if (monHP <= 0) {
		console.log("You KILLED THA MONSTER.");
	}
}

function gameAction() {
	console.log("tick");
}
