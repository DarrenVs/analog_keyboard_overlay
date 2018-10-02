
function scene_default(canvas, ctx) {

    var KeyImage = new Image();
    KeyImage.src = "./images/KeyDefault.png";

    this.objects = [
        new Thumbstick(
            200*.5, 50+200*.5,
            10,
            Math.min(200*.5, 200*.5)-5,
            0.1,
            {lineWidth:0, fillStyle:"rgba(37, 37, 37, 0.43)"},
            {strokeStyle:"#B4B4B4", lineWidth:4},
            {strokeStyle:"#B4B4B4", lineWidth:4},
            {fillStyle:"#524d4d"},
            {strokeStyle:"#B4B4B4", lineWidth:4},
            {strokeStyle:"#524d4d", lineWidth:4},

        ),
        new Key(canvas.width-300+85, 100+0,"KeyW","W",1,true,100,0.1,KeyImage,"rgba(255, 255, 255, 0.52)",85),
        new Key(canvas.width-300+0, 100+100,"KeyA","A",0,true,100,0.1,KeyImage,"rgba(255, 255, 255, 0.52)",85),
        new Key(canvas.width-300+100, 100+100,"KeyS","S",1,false,100,0.1,KeyImage,"rgba(255, 255, 255, 0.52)",85),
        new Key(canvas.width-300+200, 100+100,"KeyD","D",0,false,100,0.1,KeyImage,"rgba(255, 255, 255, 0.52)",85),
    ];
}
