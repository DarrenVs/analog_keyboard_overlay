# analog_keyboard_overlay

This is a browser plugin overlay for [OBS Studio][e148b553]. This overlay displays (virtual)controller axes as a keyboard for those who want to show off their analog keyboards on stream/recordings.

## Methods used to read analog input:

The analog input is read from [Navigator.getGamepads()][ebc9fbee]. Reading axis from any connected controller with axes and displaying the values in [HTML5 Canvas][b68cfb52].

The current limitations of the OBS browser plugin scope is that you cannot read background keystrokes. However, gamepad information does update in the background. This overlay makes use of the gamepad information to read the analog information and display as keyboard information.

## Installation & use

**OBS Installation:**

`https://darrenvs.github.io/analog_keyboard_overlay/` ![Overlay installation](https://i.imgur.com/CqEanAn.png)

**Move elements around:**

![Edit/move overlay elements](https://i.imgur.com/0QGuCqW.png)

### Wish to support this project?

Send me a nice message on discord [`#dev`][4cb0053a]`@DarrenVs` or tip via my streaming [tipping page][204bed40].

[204bed40]: https://streamelements.com/darrenvs/tip "DarrenVs's tipping page"
[4cb0053a]: https://discord.gg/C8hY9z3 "Wooting's #woot_dev channel"
[b68cfb52]: https://developer.mozilla.org/nl/docs/Web/API/Canvas_API "Canvas API"
[e148b553]: https://obsproject.com/ "Open Broadcaster Software"
[ebc9fbee]: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getGamepads "getGamepads"
