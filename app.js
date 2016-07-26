var button = document.querySelector("#createChar");

button.addEventListener("click", function() {
  createChar();
});

function createChar() {
	var name = prompt("What is thy name?");
	var hero = new Actor();
	hero.addName(name);
	console.log("Hero has a name", hero);
	return hero;
}

var monster = new Monster();
console.log("Monster is: ", monster);

function randomizer(min,max) {
	var number = Math.floor(Math.random() * max + min);
}

function fight(hero, enemy) {
	var heroAtt = hero["str"] + hero["dex"];
	var heroRand = randomizer(1, 10);
	var monAtt = enemy["str"] + enemy["dex"];
	var monRand = randomizer(1, 10);

	console.log(heroRand, monRand, heroAtt, monAtt);
	console.log("Your attack: " + heroAtt + " monster attack: " + monAtt);

	if (heroAtt > monAtt) {
		console.log("You hit the monstah!");
		hero.exp = hero.exp + enemy.exp;
	} else if (monAtt < heroAtt) {
		console.log("OUCH! You got hit!");
	} else {
		console.log("A parry!");
	}

	console.log(hero["exp"]);

}