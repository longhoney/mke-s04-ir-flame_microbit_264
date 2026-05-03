basic.forever(function () {
    lcd.clearScreen()
    lcd.displayText("MKE-S04 Value:", 1, 1)
    lcd.displayText(convertToText(pins.analogReadPin(AnalogPin.P0)), 1, 2)
    basic.pause(1000)
})
