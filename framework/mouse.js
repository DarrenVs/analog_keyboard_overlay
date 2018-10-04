


function Mouse() {

    // Properties
    this.x = 0,
    this.y = 0,
    this.button1 = false,
    this.button1Click = false,
    this.button2 = false,
    this.button2Click = false,
    this.button3 = false,
    this.button3Click = false,
    this.wheelDelta = {x: 0, y: 0},

    // Update loop
    this.update = function(delta) {

		mouse.wheelDelta.x *= 0.7 * delta;
		mouse.wheelDelta.y *= 0.7 * delta;
        mouse.button1Click = false;
        mouse.button2Click = false;
        mouse.button3Click = false;
    }


    // Mouse events

    canvas.addEventListener('mousedown', function(e) {

        // Update position;
        mouse.x = e.x;
        mouse.y = e.y;

        // Update button state
        if (mouse[ 'button'+e.which ] === false) {

            mouse[ 'button'+e.which ] = true;
            mouse[ 'button'+e.which+'Click' ] = true;
        }
    });

    canvas.addEventListener('mouseup', function(e) {

        // Update position;
        mouse.x = e.x;
        mouse.y = e.y;

        // Update button state
        if (mouse[ 'button'+e.which ] === true) {

            mouse[ 'button'+e.which ] = false;
        }
    });

    canvas.addEventListener('mousemove', function(e) {

        // Update position;
        mouse.x = e.x;
        mouse.y = e.y;
    });

    canvas.addEventListener('wheel', function(e) {

        // Update wheel delta
        mouse.wheelDelta.x = e.deltaX;
        mouse.wheelDelta.y = e.deltaY;
    })
}
