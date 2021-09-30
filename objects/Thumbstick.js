



// Default restorepoint properties
defaultThumbstickProperties = {
    radius: 100,
    deadzone: 0.1,
	antiDeadzone: 0,
	xAxes: {0:true},
	yAxes: {1:true},
	backgroundProperties: {strokeStyle:"black", lineWidth:4, fillStyle:"rgba(255,255,255,0.3)"},
	xLineProperties: {strokeStyle:"blue", lineWidth:4},
	yLineProperties: {strokeStyle:"red", lineWidth:4},
	deadzoneProperties: {fillStyle:"red"},
	inputVectorProperties: {strokeStyle:"#AA0000", lineWidth:4},
	unitVectorProperties: {strokeStyle:"black", lineWidth:4},
}



// Thumbstick object
function Thumbstick(x, y, width, height, properties) {

	applyProperties(this, properties);

	// Frameork properties
	this.x = x; this.y = y;
	this.previousX = this.x; this.previousY = this.y;
	this.width = width; this.height = height;
    this.defaultProperties = defaultThumbstickProperties;
    this.className = "Thumbstick";

	// Object properties
	applyProperties(this, defaultThumbstickProperties);
	// Custom object properties
	applyProperties(this, properties);

	// Object values
	this.input = new Vector(0, 0);
}


// Update loop
Thumbstick.prototype.update = function (delta) {

	var xAxis = yAxis = 0;

	// Get gamepad input
	for (var id in gamepads) {
		var gamepad = gamepads[id];
		if (gamepad !== null && gamepad.axes) {
		
			for (var i = 0; i < gamepad.axes.length; i++) {
				
				if (this.xAxes[i]) {
					xAxis += gamepad.axes[i] || 0;
				}
				
				if (this.yAxes[i]) {
					yAxis += gamepad.axes[i] || 0;
				}
			}
		}
	}

	// Update input
	this.previousX = this.input.x;
	this.previousY = this.input.y;
	this.input.x = Math.max(Math.min(xAxis, 1), -1);
	this.input.y = Math.max(Math.min(yAxis, 1), -1);

	// Update position
	return this.previousX != this.input.x || this.previousY != this.input.y;
}

// Draw function
Thumbstick.prototype.draw = function (canvas, ctx) {

	canvas_properties(ctx, {lineCap:"round"});
	ctx.transform(1, 0, 0, 1, this.radius, this.radius);

    // Max radius
    ctx.beginPath();
	canvas_arc(ctx, 0, 0, this.radius, 0, 2*Math.PI, this.backgroundProperties);
    ctx.stroke();
    ctx.fill();

    // Deadzone radius
	ctx.beginPath();
	canvas_arc(ctx, 0, 0, this.radius * this.deadzone, 0, 2*Math.PI, this.deadzoneProperties);
    ctx.fill();



    // X line
	ctx.beginPath();
	canvas_line(ctx, 0, 0, this.input.x * this.radius, 0, this.xLineProperties);
    ctx.stroke();
    // Y line
	ctx.beginPath();
	canvas_line(ctx, 0, 0, 0, this.input.y * this.radius, this.yLineProperties);
    ctx.stroke();

    if (this.input.length() > this.deadzone) {

		var normalInput = this.input.unit(1, 1);

		var currentAngles = this.input.toAngles()
		var clampedInput = Vector.fromAngles(currentAngles.theta, currentAngles.phi).multiply((this.input.length() - this.antiDeadzone) / (1 - this.antiDeadzone));

        // Maxed out vector
		ctx.beginPath();
        canvas_arrow(ctx, 0, 0, normalInput.x * this.radius, normalInput.y * this.radius, this.unitVectorProperties);
        ctx.stroke();

        // Direction vector
		ctx.beginPath();
        canvas_arrow(ctx, 0, 0, clampedInput.x * this.radius, clampedInput.y * this.radius, this.inputVectorProperties);
        ctx.stroke();
    }
    ctx.closePath();
}
