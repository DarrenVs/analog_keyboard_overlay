# analog_keyboard_overlay

This is a browser plugin overlay for [OBS Studio][e148b553].

## Methods used to read analog input:

The analog input is read from [Navigator.getGamepads()][ebc9fbee]. Reading axis from any connected controller with axes and displaying the values in [HTML5 Canvas][b68cfb52].

[b68cfb52]: https://developer.mozilla.org/nl/docs/Web/API/Canvas_API "Canvas API"
[e148b553]: https://obsproject.com/ "Open Broadcaster Software"
[ebc9fbee]: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getGamepads "getGamepads"
