









// Main framework
window.addEventListener("load",function () {

		//Index
		var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		var objects = [
			new Thumbstick(
                200*.5, 50+200*.5,
                10,
                Math.min(200*.5, 200*.5)-5,
                0.1
            ),
			new Key(canvas.width-300+85, 100+0,"KeyW","W",1,true,100,0.1),
			new Key(canvas.width-300+0, 100+100,"KeyA","A",0,true,100,0.1),
			new Key(canvas.width-300+100, 100+100,"KeyS","S",1,false,100,0.1),
			new Key(canvas.width-300+200, 100+100,"KeyD","D",0,false,100,0.1),
		];

		// Set render function
		var frameUpdate = function() {

			// Clear
            ctx.setTransform(1, 0, 0, 1, 0, 0);
			ctx.clearRect(0,0,canvas.width,canvas.height);

			// Draw
			for (var i = 0; i < objects.length; i++) {
				var object = objects[i];

                ctx.setTransform(1, 0, 0, 1, object.x, object.y);
				object.draw.call(object, canvas, ctx);
			}
		}


		// Set render function
		var updateLoop = function(delta) {

			var updateScreen = false;

			// Update
			gamepads = navigator.getGamepads();
			for (var i = 0; i < objects.length; i++) {
				var object = objects[i];

				if (object.update.call(object, delta) === true) {

					updateScreen = true;
				}
			}

			// Update screen
			if (updateScreen) {
				frameUpdate();
			}

			// Next loop
			window.requestAnimationFrame(updateLoop);
		}
		window.requestAnimationFrame(updateLoop);
		frameUpdate();


},false)
