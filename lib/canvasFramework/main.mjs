




dummyProperties = {

    foo: "bar",
}





class Dummy {

    constructor() {

        for (const property in dummyProperties) {
            this[property] = dummyProperties[property]
        }
    }

    tell(word) {

        console.log(this.hello, word)
    }
}



