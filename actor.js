function Actor(name, str, dex, sta, int, wis, exp, lvl, spec) {
	this.name = name || "Unnamed";
	this.str = str || 2;
	this.dex = dex || 2;
	this.sta = sta || 2;
	this.int = int || 2;
	this.wis = wis || 2;
	this.exp = exp || 0;
	this.lvl = lvl || 1;
	this.spec = spec || "Adventurer";
	this.getHP = function() {
		return this["sta"] + 10;
	};
}

Actor.prototype.addName = function(promptName) {
	this.name = promptName;
};

Actor.prototype.addStat = function(stat, quan) {
	var currStat = this[stat];
	this[stat] = currStat + quan;
};

Actor.prototype.levelUp = function(quan) {
	if (this.spec === "Adventurer") {
		this.addStat("str", quan);
		this.addStat("dex", quan);
		this.addStat("sta", quan*2);
		this.addStat("int", quan);
		this.addStat("wis", quan);
		this.addStat("lvl", quan);
	} else if (this.spec === "Barbarian") {
		this.addStat("str", quan*1.5);
		this.addStat("dex", quan*1.1);
		this.addStat("sta", quan*3);
		this.addStat("int", quan/4);
		this.addStat("wis", quan/2);
		this.addStat("lvl", quan);
	}
};

Actor.prototype.calculateAttack = function() {
	return this["str"] + this["dex"] + randomizer(1,10);
};

Actor.prototype.addExp = function(quan) {
	this["exp"] = this["exp"] + quan;

	if (this["exp"]%10 === 0) {
		console.log("LEVEL UP!");
		this.levelUp(1);
		console.log("You are now level: " + this["lvl"]);
	} else {
		console.log("You gain: " + quan + " exp!");
	}
};