// Set context properties
function canvas_properties(context, properties) {
    for (var propertyName in properties) {
        if (properties.hasOwnProperty(propertyName)) {

            switch (propertyName) {
                case "lineWidth":
                    context.lineWidth = properties[propertyName];
                    break;
                case "strokeStyle":
                    context.strokeStyle = properties[propertyName];
                    break;
                case "fillStyle":
                    context.fillStyle = properties[propertyName];
                    break;
                case "lineCap":
                    context.lineCap = properties[propertyName];
                    break;
                case "textAlign":
                    context.textAlign = properties[propertyName];
                    break;
                case "font":
                    context.font = properties[propertyName];
                    break;
                default:

            }
        }
    }
}

// Draw arrow
function canvas_arrow(context, fromx, fromy, tox, toy, properties) {
    if (properties !== undefined) canvas_properties(context, properties);
    var headlen = 10;   // length of head in pixels
    var angle = Math.atan2(toy-fromy,tox-fromx);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
    context.moveTo(tox, toy);
    context.lineTo(tox-headlen*Math.cos(angle-Math.PI/6),toy-headlen*Math.sin(angle-Math.PI/6));
    context.moveTo(tox, toy);
    context.lineTo(tox-headlen*Math.cos(angle+Math.PI/6),toy-headlen*Math.sin(angle+Math.PI/6));
}

// Draw line
function canvas_line(context, fromx, fromy, tox, toy, properties) {
    if (properties !== undefined) canvas_properties(context, properties);
    context.moveTo(fromx, fromy);
    context.lineTo(tox, toy);
}

// Draw arc
function canvas_arc(context, x, y, radius, beginPoint, endPoint, properties) {
    if (properties !== undefined) canvas_properties(context, properties);
    context.arc(x, y, radius, beginPoint, endPoint);
}

// Draw text
function canvas_text(context, x, y, text, properties) {
    if (properties !== undefined) canvas_properties(context, properties);
    context.fillText(text, x, y);
}

// Draw text
function canvas_fill_rec(context, x, y, sizex, sizey, properties) {
    if (properties !== undefined) canvas_properties(context, properties);
    context.fillRect(x, y, sizex, sizey);
}
