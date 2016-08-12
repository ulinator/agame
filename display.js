function Display(containerSelector) {
	this.container = document.querySelector(containerSelector);
}

Display.prototype.createDisplayLine = function(message, type) {
	message = message || "null";
	type = type || "p";
	var element = document.createElement(type);
	element.innerHTML = message;
	return element;
}

Display.prototype.addLine = function(message) {
	var newLine = this.createDisplayLine(message);
	this.container.appendChild(newLine);
};
