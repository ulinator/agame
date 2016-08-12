function Monster(name, str, dex, sta, int, wis, exp) {
	this.name = name || "Goblin peasant";
	this.str = str || 1;
	this.dex = dex || 1;
	this.sta = sta || 1;
	this.int = int || 1;
	this.wis = wis || 1;
	this.exp = exp || 1;
	this.HP = 10;
}

Monster.prototype.setHP = function() {
	this["HP"] = this["sta"] * 5 + 10;
};

Monster.prototype.getAttack = function() {
	return this["str"] + this["dex"] + randomizer(1,10);
};

Monster.prototype.getDmg = function() {
	return this["str"] + randomizer(1,6);
};

Monster.prototype.isAlive = function() {
	return this["HP"] > 1;
};

Monster.prototype.createMon = function(quan) {
	this.name = "Goblin" + quan;
	this.str = randomizer(quan/2, quan);
	this.dex = randomizer(quan/2, quan);
	this.sta = randomizer(quan/2, quan);
	this.int = randomizer(quan/2, quan);
	this.wis = randomizer(quan/2, quan);
	this.exp = quan;
	this.setHP();
};