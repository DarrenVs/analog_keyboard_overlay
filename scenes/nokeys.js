
function scene_default(canvas, ctx) {

    // The image used to frame the key
    var KeyImage = new Image();
    KeyImage.src = "./images/KeyDefault.png";

    // The shameless credits that fade away after launch
    var credit = new Text(
        canvas.width*.5, canvas.height-25, 300, 50,
        {text:"Created by DarrenVs",textAlign:"center",fillStyle:"rgba(108, 108, 108)",font:"26px Lucida Console"}
    );
    var creditsAlpha = 1;
    var fadeTime = 7;

    // Object dragging info
    var clickedObject = null;
    var draggingOffset = new Vector(0, 0);
    var gridsize = 10;

    // Property editor
    var propertyEditor = new PropertyEdit(0, 0, 10, 10);
    var editingProperties = false;

    // Thumbstick

    var thumbstick = new Thumbstick(
        15, 50, 200, 200,
        {
            backgroundProperties: { lineWidth: 4, strokeStyle: "#B4B4B4", fillStyle: "rgba(37, 37, 37, 0.43)" },
            xLineProperties: { strokeStyle: "#B4B4B4", lineWidth: 4 },
            yLineProperties: { strokeStyle: "#B4B4B4", lineWidth: 4 },
            deadzoneProperties: { fillStyle: "#524d4d" },
            inputVectorProperties: { strokeStyle: "#B4B4B4", lineWidth: 4 },
            unitVectorProperties: { strokeStyle: "#524d4d", lineWidth: 4 },
        }
    );
    var thumbstickAngle = new Text(
        15, 50, 200, 200,
        { text: "0", textAlign: "center", fillStyle: "rgba(108, 108, 108)", font: "26px Lucida Console" }
    );

    // The objects to be rendered
    this.objects = [
        thumbstick,
        thumbstickAngle,
        credit
    ];


    this.draw = function(canvas, ctx) {

        // Render outline when editing objects
        if (clickedObject !== null) {
    		for (var i = 0; i < this.objects.length; i++) {

    			var object = this.objects[i];

                ctx.setTransform(1, 0, 0, 1, object.x, object.y);
            	ctx.beginPath();
            	canvas_properties(ctx, {strokeStyle:"#FF00FF", lineWidth:1})
            	ctx.rect(0, 0, object.width, object.height);
            	ctx.stroke();
            }
        }
    }

    // Update loop
    this.update = function(delta) {

        thumbstickAngle.Text = Math.atan2(thumbstick.input.y, thumbstick.input.x)

        // Drag objects around
        if (mouse.button1Click === true || mouse.button3Click === true) {

            clickedObject = null;
            for (var i = 0; i < this.objects.length; i++) {
                var object = this.objects[i];

                if ((mouse.x > object.x && mouse.y > object.y)
                && (mouse.x < object.x + object.width && mouse.y < object.y + object.height)) {

                    draggingOffset.x = object.x - mouse.x;
                    draggingOffset.y = object.y - mouse.y;
                    clickedObject = object;

                    console.log("Clicked on object:", object);

                    break;
                }
            }
        } if ((mouse.button1 === false && mouse.button3 === false) && clickedObject !== null) {

            console.log("Released mouse");
            clickedObject = null;
        }
        if (clickedObject !== null && mouse.button1 === true) {

            console.log("Dragging");
            clickedObject.x = Math.round((mouse.x + draggingOffset.x)/gridsize)*gridsize;
            clickedObject.y = Math.round((mouse.y + draggingOffset.y)/gridsize)*gridsize;
        }



        // Options menu
        // Clicked away from the menu
        if (mouse.button3Click === true || mouse.button1Click === true) {

            if (clickedObject === null && editingProperties === true) {

                console.log("clicked away from editor");

                // Hide property edit window
                propertyEditor.hidePropertyEdit();
                editingProperties = false;
            }
        }
        // Clicked on an object
        if (mouse.button3Click === true && clickedObject !== null && editingProperties === false) {

            console.log("Editing object");

            // Show property edit window
            propertyEditor.showPropertyEdit(clickedObject.defaultProperties, clickedObject);
            editingProperties = true;
        }


        // Fade credits away
        if (creditsAlpha > 0) {
            credit.textStyle.fillStyle = "rgba(108, 108, 108, "+ creditsAlpha +")";
            creditsAlpha -= (1/fadeTime) * delta;

            return true;
        }
    }
}
