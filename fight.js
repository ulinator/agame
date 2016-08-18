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
			defender["HP"] = defender["HP"] - attDMG;
			display.addLine("You hit <mark>" + monster.name + "</mark> for " + attDMG + "!");

			if (defender["HP"] < 1) {
				display.addLine("You killed the " + defender.name + ".");
				attacker.addExp(defender["exp"]);
			} else {
				display.addLine("Monster is down to: " + defender["HP"] + " HP.");
			};

		} else if (result === defender)  {
			attacker["HP"] = attacker["HP"] - defDMG;
			display.addLine("You got hit by <mark>" + monster.name + "</mark> for " + defDMG + ".");

			if (attacker["HP"] < 1) {
				display.addLine("You were mortally hit by <mark>" + defender.name + "</span>...");
				game.changeState("inactive");
				display.addLine("...you died.");
			} else {
				display.addLine("Your hp is down to: " + attacker["HP"] + ".");
			};
		} else {
			display.addLine("You fight fiercely but not to prevail.");
		}
	};

	round(this.attacker, this.defender);

};
