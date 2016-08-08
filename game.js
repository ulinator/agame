function Game(state) {
	this.state = state || "inactive"; // used states: fight, search, inactive
}

Game.prototype.changeState = function(param) {
	this.state = param;
	if ( (param === "search") || (param === "fight") ) {
		timer.tick(2000);
	} else {
		timer.tickStop();
	}
};

// Game.prototype.fight = function(attacker, defender) {
// 	game.state = "fight";

// 	var heroHP = attacker.HP;
// 	var heroAtt = attacker.getAttack();
// 	console.log("hero HP ", heroHP + "hero Att: ", heroAtt);

// 	var monHP = defender.HP;
// 	var monAtt = defender.getAttack();
// 	console.log("monster HP ", monHP + "monster Att: ", monAtt);

// 	var resolveRound = function(attacker,defender) {
// 		if ( heroAtt > monAtt ) {
// 			return attacker;
// 		} else if (heroAtt < monAtt ) {
// 			return defender;
// 		} else {
// 			return null;
// 		}
// 	};

// 	var round = function(attacker, defender) {
// 		var result = resolveRound(attacker,defender);

// 		if (result === attacker) {
// 			console.log("=== HERO WON ===");
// 			defender["HP"] = defender["HP"] - heroAtt;

// 			if (defender["HP"] < 1) {
// 				console.log("You killed the " + defender.name + "!");
// 				attacker.addExp(defender["exp"]);
// 				game.state = "search";
// 			} else {
// 				console.log("monster hp is down to: ", defender["HP"]);
// 			};

// 		} else if (result === defender)  {
// 			console.log("monster won");
// 			attacker["HP"] = attacker["HP"] - monAtt;

// 			if (attacker["HP"] < 1) {
// 				console.log("You were mortally hit by" + defender.name + ".");
// 				game.state = "inactive";
// 				console.log("You died.");
// 			} else {
// 				console.log("Your hp is down to: ", attacker["HP"]);
// 			};
// 		} else {
// 			console.log("parry");
// 			return null;
// 		}
// 	};

// 	round(attacker,defender);
// 	console.log("pozostale hp twoje " + attacker["HP"]);
// };