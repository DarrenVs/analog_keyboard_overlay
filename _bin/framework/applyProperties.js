
// Applying properties to objects
function applyProperties(object, properties) {

    for (var propertyName in properties) {
        if (properties.hasOwnProperty(propertyName)) {

            object[ propertyName ] = properties[ propertyName ];
        }
    }
}
