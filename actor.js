function Actor(name, str, dex, sta, int, wis, exp) {
	this.name = name || "Unnamed";
	this.str = str || 1;
	this.dex = dex || 1;
	this.sta = sta || 1;
	this.int = int || 1;
	this.wis = wis || 1;
	this.exp = exp || 0;
}

Actor.prototype.addName = function(promptName) {
	this.name = promptName;
};

Actor.prototype.addStat = function(stat, quan) {
	var currStat = this[stat];
	this[stat] = currStat + quan;
};