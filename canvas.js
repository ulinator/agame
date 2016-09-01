function Canvas() {
	var c = document.querySelector("#canvas");
	var ctx = c.getContext("2d");
	}

Canvas.prototype.drawHero = function(param) {
	c = document.querySelector("#canvas-hero");
    ctx = c.getContext("2d");

    var img = document.querySelector("#" + param);

    ctx.drawImage(img,0,0);
};

// window.onload = function() {
//     var c = document.querySelector("#canvas");

//     var ctx = c.getContext("2d");

//     var img_barb = document.querySelector("#barb");
//     var img_gob = document.querySelector("#gobl");
//     var hit = 

//     ctx.drawImage(img_barb,0,0);
//     ctx.drawImage(img_gob,250,0);


// };

