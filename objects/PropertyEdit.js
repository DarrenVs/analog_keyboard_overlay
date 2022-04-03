



// Default restorepoint properties
defaultPropertyEditProperties = {
}


// PropertyEdit object
function PropertyEdit(x, y, width, height, properties) {

	// Framework properties
	this.x = x; this.y = y;
	this.width = width; this.height = height;
    this.defaultProperties = defaultPropertyEditProperties;
    this.className = "PropertyEdit";

	// Object properties
	applyProperties(this, defaultPropertyEditProperties);
	// Custom object properties
	applyProperties(this, properties);

	// Object values
	this.targetObject = null;
}

// Object methods

// Hides the property edit window
PropertyEdit.prototype.hidePropertyEdit = function () {

	// Get window elements
	var editorWindow = document.getElementById("propertyEditor");
	var propertyTable = document.getElementById("propertyTable");

	// Clear properties
	while (propertyTable.firstChild !== null) {
		propertyTable.removeChild(propertyTable.firstChild);
	}

	// Clear target object
	this.targetObject = null;

	// Hide window
	editorWindow.hidden = true;
}

// Reveals the property edit window
PropertyEdit.prototype.showPropertyEdit = function(defaultProperties, targetObject) {

	// Link target object
	this.targetObject = targetObject;

	// Get window elements
	var editorWindow = document.getElementById("propertyEditor");
	var propertyTable = document.getElementById("propertyTable");
	var editorTitle = document.getElementById("propertyEditorTitle");

	// Change title
	editorTitle.innerHTML = targetObject.className;

	var htmlString = ""
	for (var propertyName in defaultProperties) {

		// Turn property to string
		var inputValue;
		switch (typeof(defaultProperties[propertyName])) {
			case "object":
				inputValue = JSON.stringify(targetObject[ propertyName ]);
				break;
			default:
				inputValue = targetObject[ propertyName ];
		}

		// Add row
		htmlString += "<tr class='property'>";
		// Add property name
		htmlString += "<td>"+ propertyName +": </td>";
		// Add input field
		htmlString += "<td><input type='text' value='"+ inputValue +"'class='inputBox "+ propertyName +"'></td>";
		// Close row
		htmlString += "</tr>"
	}
	// Set inner html
	propertyTable.innerHTML = htmlString;


	var inputBoxes = document.getElementsByClassName("inputBox");
	for (var i = 0; i < inputBoxes.length; i++) {
		var inputBox = inputBoxes[i];
		inputBox.oninput = function(e) {

			var propertyName = e.currentTarget.classList[1];
			var inputValue;

			switch (typeof(defaultProperties[propertyName])) {
				case "object":
					inputValue = JSON.parse(e.currentTarget.value);
					break;
				case "number":
					inputValue = Number(e.currentTarget.value);
					break;
				default:
					inputValue = e.currentTarget.value;
			}
			targetObject[propertyName] = inputValue;
		};
	}

	// Show window
	editorWindow.hidden = false;
}



// Framework methods

// Update loop
PropertyEdit.prototype.update = function (delta) {

}

// Draw function
PropertyEdit.prototype.draw = function (canvas, ctx) {

}
