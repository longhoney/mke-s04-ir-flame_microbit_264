basic.forever(function () {
    lcd.displayText(convertToText(pins.analogReadPin(AnalogPin.P0)), 1, 1)
    basic.pause(100)
    if (pins.analogReadPin(AnalogPin.P0) <= 100) {
        lcd.displayText("Nguy hiem!!!", 1, 1)
        basic.showIcon(IconNames.Angry)
    }
    if (pins.analogReadPin(AnalogPin.P0) > 100) {
        lcd.displayText("Can Than!!!", 1, 1)
        basic.showIcon(IconNames.Surprised)
    }
    if (pins.analogReadPin(AnalogPin.P0) > 200) {
        lcd.displayText("An Toan", 1, 1)
        basic.showIcon(IconNames.Happy)
    }
})
