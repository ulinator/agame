function Fight(attacker, defender) {
	this.attacker = attacker;
	this.defender = defender;
	this.state = "inactive";
}

Fight.prototype.continue = function(attacker, defender) {
	var att = attacker.getAttack();
	var def = defender.getAttack();

	var resolveRound = function(attacker,defender) {

		if ( att  > def ) {
			return attacker;
		} else if (att < def ) {
			return defender;
		} else {
			return null;
		}
	};

	var round = function(attacker, defender) {
		var result = resolveRound(attacker,defender);

		if (result === attacker) {
			console.log("=== YOU WON ===");
			defender["HP"] = defender["HP"] - att;
			console.log("You hit " + monster.name + " for " + att + "!");

			if (defender["HP"] < 1) {
				console.log("You killed the " + defender.name + ".");
				attacker.addExp(defender["exp"]);
				game.state = "search";
			} else {
				console.log("Monster is down to: " + defender["HP"] + " HP.");
				game.state = "fight";
			};

		} else if (result === defender)  {
			console.log("monster won");
			attacker["HP"] = attacker["HP"] - def;
			console.log("You got hit by " + monster.name + " for " + def + ".");

			if (attacker["HP"] < 1) {
				console.log("You were mortally hit by" + defender.name + "...");
				game.state = "search";
				console.log("...you died.");
			} else {
				console.log("Your hp is down to: ", attacker["HP"] + ".");
				game.state = "fight";
			};
		} else {
			console.log("You fight fiercely but not to prevail.");
			game.state = "fight";
		}
	};

	round(attacker,defender);

	// var isStronger = function() {
	// 	if ( ((this.getAttack) / 2 ) > ( target.getAttack ) ) {
	// 		console.log("Crushing blow!");
	// 		console.log(this.getAttack);
	// 		return (this.getAttack * 2);
	// 	}
	// };

};