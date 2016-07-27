function Actor(name, str, dex, sta, int, wis, exp) {
	this.name = name || "Unnamed";
	this.str = str || 2;
	this.dex = dex || 2;
	this.sta = sta || 2;
	this.int = int || 2;
	this.wis = wis || 2;
	this.exp = exp || 0;
	this.hp = this.sta + 10;
}

Actor.prototype.addName = function(promptName) {
	this.name = promptName;
};

Actor.prototype.addStat = function(stat, quan) {
	var currStat = this[stat];
	this[stat] = currStat + quan;
};

Actor.prototype.attack = function() {
	return this["str"] + this["dex"] + randomizer(1,10);
};