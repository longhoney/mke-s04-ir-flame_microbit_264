basic.forever(function () {
    lcd.displayText(convertToText(pins.analogReadPin(AnalogPin.P0)), 1, 1)
    basic.pause(1000)
})
