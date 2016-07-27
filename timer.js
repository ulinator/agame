function Timer(state, callback) {
	this.state = state || "paused";
	this.callback = callback;
}

var nIntervId; // set interval id

Timer.prototype.tick = function() {
	if (this.state === "paused") {
		nIntervId = window.setInterval(this.callback, 2000);
		this.state = "active";
	} else if (this.state === "active") {
		console.log("Timer is already running");
		return null;
	}
};

Timer.prototype.tickStop = function() {
	if (this.state === "paused") {
		console.log("Timer is already paused");
		return null;
	} else if (this.state === "active") {
		clearInterval(nIntervId);
		this.state = "paused";
	}
};