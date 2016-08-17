function Stats(name, spec, HP, maxHP, str, dex, sta, exp, lvl) {
	this.name = document.querySelector('#stats-name');
	this.spec = document.querySelector('#stats-spec');
	this.HP = document.querySelector('#stats-HP');
	this.maxHP = document.querySelector('#stats-maxHP');
	this.str = document.querySelector('#stats-str');
	this.dex = document.querySelector('#stats-dex');
	this.sta = document.querySelector('#stats-sta');
	this.exp = document.querySelector('#stats-exp');
	this.lvl = document.querySelector('#stats-lvl');
}

Stats.prototype.Update = function() {
	this.name.innerHTML = hero.name || "??";
	this.spec.innerHTML = hero.spec || "??";
	this.HP.innerHTML = hero.HP || "??";
	this.maxHP.innerHTML = hero.maxHP || "??";
	this.str.innerHTML = Math.floor(hero.str) || "??";
	this.dex.innerHTML = Math.floor(hero.dex) || "??";
	this.sta.innerHTML = Math.floor(hero.sta) || "??";
	this.exp.innerHTML = hero.exp || "0";
	this.lvl.innerHTML = hero.lvl || "1";
};