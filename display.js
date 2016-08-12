function Display(message) {
	this.type = "p";
	this.message = message || "null";
	this.element = document.createElement(this.type);
	this.element.innerHTML = this.message;
}

Display.prototype.new = function(message) {
	var newLine = new Display(message);
    document.querySelector('#display').appendChild(newLine.element);
};