// Thumbstick object
function Thumbstick(x, y, size, radius, deadzone) {

	this.x = x; this.y = y;
    this.size = size;
    this.radius = radius;
    this.deadzone = deadzone;
	this.input = new Vector(0, 0);

	this.update = function(delta) {

		var xAxis = yAxis = 0;

		// Get keyboard input
		xAxis += keyboard.KeyD ? 1 : 0;
		xAxis -= keyboard.KeyA ? 1 : 0;
		yAxis += keyboard.KeyS ? 1 : 0;
		yAxis -= keyboard.KeyW ? 1 : 0;

		// Get gamepad input
		for (var id in gamepads) {
			var gamepad = gamepads[id];
			if (gamepad !== null && gamepad.axes) {
				xAxis += gamepad.axes[0] || 0;
				yAxis += gamepad.axes[1] || 0;
			}
		}

		// Update input
		this.input.x = Math.max(Math.min(xAxis, 1), -1);
		this.input.y = Math.max(Math.min(yAxis, 1), -1);;

		// Update position
		return this.input.length() > this.deadzone;
	}

	this.draw = function(canvas, ctx) {

		canvas_properties(ctx, {lineCap:"round"});

        // Max radius
        ctx.beginPath();
		canvas_arc(ctx, 0, 0, this.radius, 0, 2*Math.PI, {strokeStyle:"black", lineWidth:4, fillStyle:"rgba(255,255,255,0.3)"});
        ctx.stroke();
        ctx.fill();

        // Deadzone radius
		ctx.beginPath();
		canvas_arc(ctx, 0, 0, this.radius * this.deadzone, 0, 2*Math.PI, {fillStyle:"red"});
        ctx.fill();



        // X line
		ctx.beginPath();
		canvas_line(ctx, 0, 0, this.input.x * this.radius, 0, {strokeStyle:"blue", lineWidth:4});
        ctx.stroke();
        // Y line
		ctx.beginPath();
		canvas_line(ctx, 0, 0, 0, this.input.y * this.radius, {strokeStyle:"red", lineWidth:4});
        ctx.stroke();

        if (this.input.length() > this.deadzone) {

            var normalInput = this.input.unit(1, 1);

            // Maxed out vector
			ctx.beginPath();
            canvas_arrow(ctx, 0, 0, normalInput.x * this.radius, normalInput.y * this.radius, {strokeStyle:"black", lineWidth:4});
	        ctx.stroke();

            // Direction vector
			ctx.beginPath();
            canvas_arrow(ctx, 0, 0, this.input.x * this.radius, this.input.y * this.radius, {strokeStyle:"#AA0000", lineWidth:4});
	        ctx.stroke();
        }
        ctx.closePath();
	}
}
