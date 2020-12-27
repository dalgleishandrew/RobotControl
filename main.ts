radio.onReceivedString(function (receivedString) {
    if (receivedString == "Forward") {
        pins.servoWritePin(AnalogPin.P2, LeftForward)
        pins.servoWritePin(AnalogPin.P1, RightForward)
        BrightLights.showColor(neopixel.colors(NeoPixelColors.White))
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    }
    if (receivedString == "Spin") {
        pins.servoWritePin(AnalogPin.P2, LeftSpin)
        pins.servoWritePin(AnalogPin.P1, RightSpin)
        BrightLights.showRainbow(1, 360)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
    }
    if (receivedString == "Stop") {
        pins.servoWritePin(AnalogPin.P2, LeftStop)
        BrightLights.clear()
        BrightLights.show()
        pins.servoWritePin(AnalogPin.P1, RightStop)
        basic.clearScreen()
    }
    if (receivedString == "Back") {
        pins.servoWritePin(AnalogPin.P2, LeftBack)
        pins.servoWritePin(AnalogPin.P1, RightBack)
        BrightLights.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
let RightStop = 0
let LeftStop = 0
let RightSpin = 0
let LeftSpin = 0
let RightBack = 0
let LeftBack = 0
let RightForward = 0
let LeftForward = 0
let BrightLights: neopixel.Strip = null
radio.setGroup(1)
BrightLights = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
BrightLights.setBrightness(200)
LeftForward = 180
RightForward = 0
LeftBack = 0
RightBack = 180
LeftSpin = 180
RightSpin = 180
LeftStop = 90
RightStop = 90
pins.servoWritePin(AnalogPin.P2, LeftStop)
pins.servoWritePin(AnalogPin.P1, RightStop)
