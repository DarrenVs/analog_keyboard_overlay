# analog_keyboard_overlay

This is a browser plugin overlay for [OBS Studio][e148b553]. This overlay displays (virtual)controller axes as a keyboard for those who want to show off their analog keyboards on stream/recordings.

## Methods used to read analog input:

The analog input is read from [Navigator.getGamepads()][ebc9fbee]. Reading axis from any connected controller with axes and displaying the values in [HTML5 Canvas][b68cfb52].

The current limitations of the OBS browser plugin scope is that you cannot read background keystrokes. However, gamepad information does update in the background. This overlay makes use of the gamepad information and reverses it back as keyboard information.

Doing it this way does not show any accuracy of how far the key is pressed (due to the many factors that go into the joystick output such as Analog Curve). It will however give a general idea on how keypresses could translate to the joystick output.

# Installation & use

### OBS Installation:

Create a new browser element and add one of the following URL's as the source.

![Overlay installation](https://i.imgur.com/CqEanAn.png)

#### Different interrations:
- https://darrenvs.github.io/analog_keyboard_overlay/ - Default
- https://darrenvs.github.io/analog_keyboard_overlay/#darkmode - Darkmode (high contrast)
- https://darrenvs.github.io/analog_keyboard_overlay/#nokeys - Removes WASD
- https://darrenvs.github.io/analog_keyboard_overlay/#fortnite - Fortnite double movement modifier
- https://darrenvs.github.io/analog_keyboard_overlay/#moba - QWER DF keys (*check below*)

### Move elements around:

![Edit/move overlay elements](https://i.imgur.com/0QGuCqW.png)

[4cb0053a]: https://discord.gg/C8hY9z3 "Wooting's #woot_dev channel"
[b68cfb52]: https://developer.mozilla.org/nl/docs/Web/API/Canvas_API "Canvas API"
[e148b553]: https://obsproject.com/ "Open Broadcaster Software"
[ebc9fbee]: https://developer.mozilla.org/en-US/docs/Web/API/Navigator/getGamepads "getGamepads"


## Preview
https://user-images.githubusercontent.com/2780639/119910697-fb0e2400-bf57-11eb-8c88-68c30990f40d.mp4

# Wooting profiles

## Left-Joystick movement
Wooting Profile Template code: '`86031f1a-8848-46ec-9d8a-12424c2d48dc`'
> `https://darrenvs.github.io/analog_keyboard_overlay/index.html`

Or map the following axes to your keyboard keys:

![image](https://user-images.githubusercontent.com/2780639/133868183-56d5ae1a-7db8-46d0-a4e2-f961928485db.png)


## MOBA Gamers only:
Wooting Profile Template code '`8ae20ae2-3482-4f66-af63-9fea29043f3f`'
> `https://darrenvs.github.io/analog_keyboard_overlay/index.html#moba`

Or map the following axes to your keyboard keys:

![image](https://user-images.githubusercontent.com/2780639/133868116-ae5861af-f32f-4f09-80ce-bc5edcb5d690.png)

## Demoing/Reviewing uses:

Since the up and down axes are linked, we cannot accuractly show both W and S pressed at the same time.
If you would like to show the full range of all 4 keys for demoing purposes, use the following overlay:
> `https://darrenvs.github.io/analog_keyboard_overlay/index.html#review`

This overlay separates W and A to left joystick, and D and S to right joystick axes to more accuractly demonstrate the key presses.

---

Wooting Profile Template code '`7adb6844-fa01-4fd9-9413-a4c6ddb4356c`'

Or map the following axes to your keyboard keys:

![wootility-lekker-dev_bg7jXQ0JWg](https://user-images.githubusercontent.com/2780639/133868469-66731db4-57ea-436c-b44c-30bfed56951b.png)

