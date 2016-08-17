function Game(state) {
	this.state = state || "inactive"; // used states: fight, search, inactive
}

Game.prototype.changeState = function(param) {
	this.state = param;
};