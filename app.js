var button = document.querySelector("#createChar");

button.addEventListener("click", function() {
  createChar();
});

function createChar() {
	var name = prompt("What is thy name?");
	var hero = new Actor();
	hero.addName(name);
	console.log("Hero has a name", hero);
}

function randomizer(min,max) {
	var number = Math.floor(Math.random() * max + min);
	console.log(number);
}