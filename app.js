var button = document.querySelector("#createChar");
var hero;

button.addEventListener("click", function() {
  hero = createChar();
});

var monster = new Monster();
console.log("Monster is: ", monster);

function createChar() {
	var name = prompt("What is thy name?");
	hero = new Actor();
	hero.addName(name);
	console.log("Hero has a name", hero);
	return hero;
}

function randomizer(min,max) {
	var number = Math.floor(Math.random() * max + min);
	return number;
}

function fight(hero, enemy) {
	var heroRand = randomizer(1, 10);
	var heroAtt = hero["str"] + hero["dex"] + heroRand;

	var monRand = randomizer(1, 10);
	var monAtt = enemy["str"] + enemy["dex"] + monRand;

	console.log(heroRand, monRand, heroAtt, monAtt);
	console.log("Your attack: " + heroAtt + " monster attack: " + monAtt);


	if (heroAtt > monAtt) {
		console.log("You hit the monstah!");
	} else if (monAtt > heroAtt) {
		console.log("OUCH! You got hit!");
	} else {
		console.log("A parry!");
	}

	console.log(hero["exp"]);
}