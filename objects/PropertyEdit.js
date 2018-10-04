



// Default restorepoint properties
defaultPropertyEditProperties = {
}



// PropertyEdit object
function PropertyEdit(x, y, width, height, properties) {

	// Framework properties
	this.x = x; this.y = y;
	this.width = width; this.height = height;

	// Object properties
	applyProperties(this, defaultPropertyEditProperties);
	// Custom object properties
	applyProperties(this, properties);

	// Object values
	this.targetObject = null;


	this.update = function(delta) {


	}

	this.draw = function(canvas, ctx) {


	}
}
