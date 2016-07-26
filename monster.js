function Monster(name, str, dex, sta, int, wis, exp) {
	this.name = name || "Unnamed";
	this.str = str || 1;
	this.dex = dex || 1;
	this.sta = sta || 1;
	this.int = int || 1;
	this.wis = wis || 1;
	this.exp = exp || 1;
	this.hp = this.sta + 10;
}