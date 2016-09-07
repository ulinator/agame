function Actor(name, str, dex, sta, int, wis, exp, lvl, spec, HP, maxHP) {
	this.name = name || "Unnamed";
	this.str = str || 2;
	this.dex = dex || 2;
	this.sta = sta || 2;
	this.int = int || 2;
	this.wis = wis || 2;
	this.exp = exp || 0;
	this.lvl = lvl || 1;
	this.spec = spec || "Adventurer";
	this.HP = HP || 70;
	this.maxHP = maxHP || 70;
	this.x = 0;
	this.y = 0;
}

Actor.prototype.setImage = function(image) {
	this.image = image;
}

Actor.prototype.setPosition = function(x, y) {
	this.x = x;
	this.y = y;
}

Actor.prototype.healHP = function(quan) {
	var quanFloored = Math.floor(quan);

	if ( this["HP"] >= this["maxHP"] ) {
		this["HP"] = this["maxHP"];
		return;
	} else  {
		this["HP"] = this["HP"] + quanFloored;
		display.addLine("You regenerate " + quanFloored + " HP.");

		if ( this["HP"] > this["maxHP"] ) {
			this["HP"] = this["maxHP"];
			display.addLine("You regenerate to full, gangsta.");
		}
	}
};

Actor.prototype.setHP = function() {
	this["maxHP"] = this["sta"] * 10 + 100;
};

Actor.prototype.resetHP = function() {
	this["HP"] = this["maxHP"];
};

Actor.prototype.addName = function(promptName) {
	this.name = promptName;
};

Actor.prototype.getAttack = function() {
	return this["str"] + this["dex"] + randomizer(1,10);
};

Actor.prototype.getDmg = function() {
	return Math.floor(this["str"]) + randomizer(1,6);
};

Actor.prototype.isAlive = function() {
	if ( this["HP"] < 1 ) {
		return null;
	} else {
		return;
	}
};

Actor.prototype.addStat = function(stat, quan) {
	var currStat = this[stat];
	this[stat] = currStat + quan;
};

Actor.prototype.addExp = function(quan) {
	var cap = this.lvl * 5 * this.lvl * 1.2;

	// var levelCap = function() {
	// 	cap = this.lvl * 10;
	// };
	this["exp"] = this["exp"] + quan;

	if (this["exp"] >= cap) {
		display.addLine("LEVEL UP!");
		this.levelUp(1);
		display.addLine("You are now level: " + this["lvl"] + ".");
	} else {
		display.addLine("You gain: " + quan + " exp.");
	}
};

Actor.prototype.levelUp = function(quan) {
	if (this.spec === "Adventurer") {
		this.addStat("str", quan*1.3);
		this.addStat("dex", quan*1.3);
		this.addStat("sta", quan*2);
		this.addStat("int", quan);
		this.addStat("wis", quan);
		this.addStat("lvl", quan);
		this.setHP();
		this.resetHP();
	} else if (this.spec === "Barbarian") {
		this.addStat("str", quan*1.5);
		this.addStat("dex", quan*1.1);
		this.addStat("sta", quan*3);
		this.addStat("int", quan/4);
		this.addStat("wis", quan/2);
		this.addStat("lvl", quan);
		this.setHP();
		this.resetHP();
	};
};

Actor.prototype.render = function(context) {
	context.drawImage(this.image, this.x, this.y)
}
