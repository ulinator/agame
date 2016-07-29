function Game(state) {
	this.state = state || "inactive";
}

Game.prototype.changeState = function(param) {
	this.state = param;
	if ( (param === "search") || (param === "fight") ) {
		timer.tick(2000);
	} else {
		timer.tickStop();
	}
};

Game.prototype.fight = function(attacker, defender) {
	game.state = "fight";

	var heroHP = hero.getHP();
	var heroAtt = hero.getAttack();
	console.log("hero HP ", heroHP + "hero Att: ", heroAtt);

	var monHP = monster.getHP();
	var monAtt = monster.getAttack();
	console.log("monster HP ", monHP + "monster Att: ", monAtt);

	var resolveRound = function(attacker,defender) {
		var val1 = attacker.getAttack();
		var val2 = defender.getAttack();

		if ( val1 > val2 ) {
			return attacker;
		} else if (val1 < val2 ) {
			return defender;
		} else {
			return null;
		}
	};

	var round = function(attacker, defender) {
		var result = resolveRound(attacker,defender);

		if (result === attacker) {
			console.log("hero won");
			monHP = monHP - heroAtt;

			if (monHP <= 0) {
				console.log("You killed the " + defender.name + "!");
				attacker.exp = attacker.exp + defender.exp;
				game.state = "search";
				return null;
			} else {
				console.log("monster hp is down to: ", monHP);
				return monHP; 
			};
		} else if (result === defender)  {
			console.log("monster won");
			heroHP = heroHP - monAtt;

			if (heroHP <= 0) {
				console.log("You were mortally hit by" + defender.name + ".");
				game.state = "inactive";
				console.log("You died.");
				return null;
			} else {
				console.log("Your hp is down to: ", heroHP);
				return heroHP; 
			};
		} else {
			console.log("parry");
			return null;
		}
	};

	round(attacker,defender);

};