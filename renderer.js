function Renderer(canvasId) {
  this.canvas = document.querySelector(canvasId);
  this.ctx = this.canvas.getContext("2d");
}

Renderer.prototype.draw = function(obj) {
  if (!obj.render) console.warn("Tried to draw object without render method!", obj);
  obj.render(this.ctx);
}
