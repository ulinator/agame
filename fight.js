function Fight(attacker, defender) {
	this.attacker = attacker;
	this.defender = defender;
	this.state = "inactive";
}

Fight.prototype.continue = function() {
	var att = this.attacker.getAttack();
	var def = this.defender.getAttack();
	var attDMG = this.attacker.getDmg();
	var defDMG = this.defender.getDmg();
	var resolveRound = function(attacker, defender) {

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
			defender["HP"] = defender["HP"] - attDMG;
			console.log("You hit " + monster.name + " for " + attDMG + "!");

			if (defender["HP"] < 1) {
				console.log("You killed the " + defender.name + ".");
				attacker.addExp(defender["exp"]);
			} else {
				console.log("Monster is down to: " + defender["HP"] + " HP.");
			};

		} else if (result === defender)  {
			console.log("monster won");
			attacker["HP"] = attacker["HP"] - defDMG;
			console.log("You got hit by " + monster.name + " for " + defDMG + ".");

			if (attacker["HP"] < 1) {
				console.log("You were mortally hit by " + defender.name + "...");
				game.changeState("inactive");
				console.log("...you died.");
			} else {
				console.log("Your hp is down to: " + attacker["HP"] + ".");
			};
		} else {
			console.log("You fight fiercely but not to prevail.");
		}
	};

	round(this.attacker, this.defender);

	// var isStronger = function() {
	// 	if ( ((this.getAttack) / 2 ) > ( target.getAttack ) ) {
	// 		console.log("Crushing blow!");
	// 		console.log(this.getAttack);
	// 		return (this.getAttack * 2);
	// 	}
	// };

};
