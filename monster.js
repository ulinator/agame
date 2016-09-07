function Monster(name, str, dex, sta, int, wis, exp) {
	this.name = name || "Goblin peasant";
	this.str = str || 1;
	this.dex = dex || 1;
	this.sta = sta || 1;
	this.int = int || 1;
	this.wis = wis || 1;
	this.exp = exp || 1;
	this.HP = 10;
	this.x = 250;
	this.y = 0;
}

Monster.prototype.setImage = function(image) {
	this.image = image;
}

Monster.prototype.setPosition = function(x, y) {
	this.x = x;
	this.y = y;
}

Monster.prototype.setHP = function() {
	this["HP"] = this["sta"] * 5 + 10;
};

Monster.prototype.getAttack = function() {
	return this["str"] + this["dex"] + randomizer(1,10);
};

Monster.prototype.getDmg = function() {
	return Math.floor(this["str"]) + randomizer(1,6);
};

Monster.prototype.isAlive = function() {
	return this["HP"] > 1;
};

Monster.prototype.createMon = function(quan) {
	var rand1 = randomizer(0, 5);
	var rand2 = randomizer(0, 5);
	var rand3 = randomizer(0, 5);
 	var image = document.querySelector("#gobl");
 	var image2 = document.querySelector("#orc1");

	if (quan < 5) {
		this.name = monsters.prefix[rand1] + " " + monsters.name[rand2] + " " + monsters.suffix[rand3];
		this.setImage(image);
	} else  {
		this.name = monsters.prefix[rand1+1] + " " + monsters.name[rand2+1] + " " + monsters.suffix[rand3+1];
		this.setImage(image2);
	};
	this.str = randomizer(quan/2, quan);
	this.dex = randomizer(quan/2, quan);
	this.sta = randomizer(quan/2, quan);
	this.int = randomizer(quan/2, quan);
	this.wis = randomizer(quan/2, quan);
	this.exp = quan;
	this.setHP();
 	renderer.draw(monster);
};

Monster.prototype.render = function(context) {
	context.drawImage(this.image, this.x, this.y)
};