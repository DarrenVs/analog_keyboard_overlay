var keyboard = {
    KeyA: false,
    KeyW: false,
    KeyS: false,
    KeyD: false,
}

document.addEventListener('keydown', function(e) {

    if (keyboard[ e.code ] === false) {

        keyboard[ e.code ] = true;
    }
})

document.addEventListener('keyup', function(e) {

    if (keyboard[ e.code ] === true) {

        keyboard[ e.code ] = false;
    }
})
