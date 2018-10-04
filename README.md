# analog_keyboard_overlay

This is a browser plugin overlay for [OBS Studio][e148b553]. This overlay displays (virtual)controller axes as a keyboard for those who want to show off their analog keyboards on stream/recordings.

## Methods used to read analog input:

The analog input is read from [Navigator.getGamepads()][ebc9fbee]. Reading axis from any connected controller with axes and displaying the values in [HTML5 Canvas][b68cfb52].

The current limitations of the browser scope is that this overlay can only read analog info in the background, keystrokes do not fire. A way around this issue is to bind your keystrokes to controller keys/axes and simulating them as keys in the overlay.

## Installation & use

**OBS Installation:**

![Overlay installation](https://i.imgur.com/CqEanAn.png)

**Move elements around:**

![Edit/move overlay elements](https://i.imgur.com/0QGuCqW.png)

### Wish to support this project?

Send me a nice message on discord `@DarrenVs#0001` or tip via my streaming [tipping page][204bed40].

[204bed40]: https://streamelements.com/darrenvs/tip "DarrenVs's tipping page"
[b68cfb52]: https://developer.mozilla.org/nl/docs/Web/API/Canvas_API "Canvas API"
[e148b553]: https://obsproject.com/ "Open Broadcaster Software"
[ebc9fbee]: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getGamepads "getGamepads"
