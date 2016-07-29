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

	var heroHP = hero.HP;
	var heroAtt = hero.getAttack();
	console.log("hero HP ", heroHP + "hero Att: ", heroAtt);

	var monHP = monster.HP;
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
			defender.HP = monHP - heroAtt;

			if (monHP <= 0) {
				console.log("You killed the " + defender.name + "!");
				attacker.addExp(defender["exp"]);
				game.state = "search";
				monster = new Monster();
				return 1;
			} else {
				console.log("monster hp is down to: ", monHP);
				return monHP; 
				return null;
			};
		} else if (result === defender)  {
			console.log("monster won");
			attacker.HP = heroHP - monAtt;

			if (heroHP <= 0) {
				console.log("You were mortally hit by" + defender.name + ".");
				game.state = "inactive";
				console.log("You died.");
				return 1;
			} else {
				console.log("Your hp is down to: ", heroHP);
				return null; 
			};
		} else {
			console.log("parry");
			return null;
		}
	};

	round(attacker,defender);
	console.log("pozostale hp twoje" + attacker.HP);

};