function Timer(state, callback) {
	this.state = state || "paused";
	this.callback = callback;
}

var nIntervId; // set interval id

Timer.prototype.start = function(interval) {
	if (this.state === "paused") {
		display.addLine("Play");
		nIntervId = window.setInterval(this.callback, interval);
		this.state = "active";
	} else if (this.state === "active") {
		display.addLine("Timer is already running.");
		return null;
	}
};

Timer.prototype.stop = function() {
	if (this.state === "paused") {
		display.addLine("Timer is already paused.");
		return null;
	} else if (this.state === "active") {
		display.addLine("Pause");
		clearInterval(nIntervId);
		this.state = "paused";
	}
};
