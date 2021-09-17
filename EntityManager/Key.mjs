

let defaultEntityProperties = {

    keyCode: "bar",
    text: "",
}



export class Key {

    constructor() {
        

    }

    constructEntity( Entity ) {

        for (const property in defaultEntityProperties) {
            this[property] = defaultEntityProperties[property]
        }
    }

    render(delta) {

        console.log(this.foo, word)
        console.log(Key)
    }

    update(delta) {

        
    }
}
