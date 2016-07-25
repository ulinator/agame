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