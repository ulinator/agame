function Timer(state) {
	this.state = "paused";
}

var nIntervId; // set interval id

Timer.prototype.tick = function() {
	if (this.state === "paused") {
		nIntervId = window.setInterval(gameAction, 2000);
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

function gameAction() {
	console.log("tick");
}