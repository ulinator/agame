function Timer(state, callback) {
	this.state = state || "paused";
	this.callback = callback;
}

var nIntervId; // set interval id

Timer.prototype.start = function(interval) {
	if (this.state === "paused") {
		console.log("Play");
		nIntervId = window.setInterval(this.callback, interval);
		this.state = "active";
	} else if (this.state === "active") {
		console.log("Timer is already running.");
		return null;
	}
};

Timer.prototype.stop = function() {
	if (this.state === "paused") {
		console.log("Timer is already paused.");
		return null;
	} else if (this.state === "active") {
		console.log("Pause");
		clearInterval(nIntervId);
		this.state = "paused";
	}
};
