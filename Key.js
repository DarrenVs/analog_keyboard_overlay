// Thumbstick object
function Key(x, y, keyCode, keyText, axis, revertedAxis, size, deadzone) {

	this.x = x; this.y = y;
    this.keyCode = keyCode;
    this.keyText = keyText;
    this.axis = axis;
    this.revertedAxis = revertedAxis;
    this.value = 0;
    this._previousValue = 0;
    this.size = size
    this.deadzone = deadzone

	this.update = function(delta) {

		var value = 0;

		// Get keyboard input
		value += keyboard[this.keyCode] ? 1 : 0;

		// Get gamepad input
		for (var id in gamepads) {
			var gamepad = gamepads[id];
			if (gamepad !== null && gamepad.axes && gamepad.axes[this.axis]) {

                if ((this.revertedAxis === true && gamepad.axes[this.axis] < 0)
                || (this.revertedAxis === false && gamepad.axes[this.axis] > 0)) {

    				value += Math.abs(gamepad.axes[this.axis]);
                }
			}
		}

		// Update input
		this.value = Math.max(Math.min(value, 1), 0);

		// Update position
		return true //Math.abs(this._previousValue - this.value) > this.deadzone;
	}

	this.draw = function(canvas, ctx) {

        ctx.beginPath();
        canvas_fill_rec(ctx, 0, size, size, -size * this.value, {fillStyle:"#444ED2"});
        ctx.stroke();

        // Print key text
        canvas_text(ctx, 0, 0, this.keyText, {textAlign:"center",fillStyle:"white",font:"30px Arial"});
	}
}
