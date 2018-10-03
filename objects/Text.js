// Text object
function Text(x, y, text, textStyle, shouldStroke) {

	this.x = x; this.y = y;
    this.text = text;
    this.textStyle = textStyle || {textAlign:"center",fillStyle:"black",font:"30px Lucida Console"};
    this.shouldStroke = shouldStroke;


	this.update = function(delta) {


	}

	this.draw = function(canvas, ctx) {


        // Print key text
        ctx.beginPath();
        canvas_text(ctx, 0, 0, this.text, this.textStyle);
	}
}
