let Celsius = 0
input.onGesture(Gesture.Shake, function () {
    if (Celsius >= 18) {
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
    } else if (Celsius >= 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    } else {
        basic.showLeds(`
            # . . . #
            . # # # .
            . # . # .
            . # # # .
            # . . . #
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(Celsius)
    basic.showString("C")
})
basic.forever(function () {
    Celsius = input.temperature()
})
