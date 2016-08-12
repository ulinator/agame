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
		var displayLine = new Display();
		var nl = displayLine.new;

		if (result === attacker) {
			defender["HP"] = defender["HP"] - attDMG;
			nl("You hit " + monster.name + " for " + attDMG + "!");

			if (defender["HP"] < 1) {
				nl("You killed the " + defender.name + ".");
				attacker.addExp(defender["exp"]);
			} else {
				nl("Monster is down to: " + defender["HP"] + " HP.");
			};

		} else if (result === defender)  {
			attacker["HP"] = attacker["HP"] - defDMG;
			nl("You got hit by " + monster.name + " for " + defDMG + ".");

			if (attacker["HP"] < 1) {
				nl("You were mortally hit by " + defender.name + "...");
				game.changeState("inactive");
				nl("...you died.");
			} else {
				nl("Your hp is down to: " + attacker["HP"] + ".");
			};
		} else {
			nl("You fight fiercely but not to prevail.");
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
