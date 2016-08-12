function Display(message) {
	this.type = "p";
	this.message = message || "null";
	this.element = document.createElement(this.type);
	this.element.innerHTML = this.message;
}

Display.prototype.displayLine = function(location, message) {
    document.querySelector('location').appendChild(this.element);
};