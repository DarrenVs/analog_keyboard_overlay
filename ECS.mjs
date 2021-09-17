
import {Key} from "./EntityManager/Key.mjs"



let dummyProperties = {

    foo: "bar",
}





class Dummy {

    constructor() {

        for (const property in dummyProperties) {
            this[property] = dummyProperties[property]
        }
    }

    tell(word) {

        console.log(this.foo, word)
        console.log( Key )
    }
}


console.log(Key)
