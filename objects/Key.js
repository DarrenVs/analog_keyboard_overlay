



// Default restorepoint properties
defaultKeyProperties = {
    keyCode: "KeyH",
    keyText: "SampleText",
    axis: 0,
    revertedAxis: false,
    size: 100,
    deadzone: 0.2,
	backgroundImage: new Image(),
	fillStyle: "rgba(255, 255, 255, 0.52)",
	fillStyleBackground: "rgba(37, 37, 37, 0.43)",
	fillSize: 85,
}



// Thumbstick object
function Key(x, y, width, height, properties) {


	// Framework properties
	this.x = x; this.y = y;
	this.width = width; this.height = height;
    this.defaultProperties = defaultKeyProperties;
    this.className = "Key";

	// Object properties
	applyProperties(this, defaultKeyProperties);
	// Custom object properties
	applyProperties(this, properties);

	// Object values
    this.value = 0;
    this._previousValue = 0;

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

		var fillOffset = -(this.fillSize-this.size)*.5

		// Fill background
        ctx.beginPath();
        canvas_fill_rec(ctx, fillOffset, fillOffset, this.fillSize, this.fillSize, {fillStyle:this.fillStyleBackground});

		// Fill value
        ctx.beginPath();
        canvas_fill_rec(ctx, fillOffset, fillOffset+this.fillSize, this.fillSize, -this.fillSize * this.value, {fillStyle:this.fillStyle});


		ctx.drawImage(
			this.backgroundImage,
			0, 0,
			this.backgroundImage.width, this.backgroundImage.height,
			0, 0,
			this.size, this.size
		)

        // Print key text
        canvas_text(ctx, this.size*.5, this.size*.5, this.keyText, {textAlign:"center",fillStyle:"white",font:"30px Lucida Console"});
	}
}
