







// Main framework
window.addEventListener("load",function () {

	//Index
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	var activeScene = new scene_default(canvas, ctx);

	// Set render function
	var frameUpdate = function() {

		// Clear
        ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0,0,canvas.width,canvas.height);

		// Draw
		for (var i = 0; i < activeScene.objects.length; i++) {
			var object = activeScene.objects[i];

            ctx.setTransform(1, 0, 0, 1, object.x, object.y);
			object.draw.call(object, canvas, ctx);
		}
	}


	// Main update loop
	var previousTime = 0;
	var updateLoop = function(currentTime) {

		// Calculate delta
		var delta = (currentTime - previousTime) / 1000;
		previousTime = currentTime;

		// Var to check if there were any frame updates needed this loop
		var updateScreen = false;

		// Update gamepad info
		gamepads = navigator.getGamepads();

		// Update scene
		if (activeScene.update.call(activeScene, delta) === true) {

			updateScreen = true;
		}

		// Update objects
		for (var i = 0; i < activeScene.objects.length; i++) {
			var object = activeScene.objects[i];

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


	// Deal with resizing
	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		frameUpdate();
	}
	window.addEventListener("resize",resizeCanvas);
},false)
