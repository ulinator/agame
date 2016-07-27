var button = document.querySelector("#createChar");
var hero;

button.addEventListener("click", function() {
  hero = createChar();
});

var monster = new Monster();
console.log("Monster is: ", monster);

// function tick() {
// 	console.log("tick");
// }

// window.setInterval(tick, 2000);

function createChar() {
	var name = prompt("What is thy name?");
	hero = new Actor();
	hero.addName(name);
	console.log("Hero has a name", hero);
	return hero;
}

function compare(att1,att2) {
	if (att1 != att2) {
		return Math.max(att1, att2);
	} else {
		console.log("draw");
		return 0;
	}
}

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
			monHP = monHP - heroAtt;
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

// function attack(heroAtt, monAtt) {
// 	var heroRand = randomizer(1, 10);
// 	var heroScore = heroAtt + heroRand;
// 	console.log("heroScore", heroScore);

// 	var monRand = randomizer(1, 10);
// 	var monScore = monAtt + monRand;
// 	console.log("monScore", monScore);

// 	console.log("Your attack: " + heroScore + " monster attack: " + monScore);

// 	if (heroScore > monScore) {
// 		console.log("You hit the monstah!");
// 		monHP = monHP - heroScore;
// 		console.log("You hit the monstah for " + heroScore + " dmg");
// 	} else if (monScore > heroScore) {
// 		console.log("OUCH! You got hit!");
// 		heroHP = heroHP - monScore;
// 		console.log("You got hit by the monstah for " + monScore + " dmg");
// 	} else {
// 		console.log("A parry!");
// 	}

// }