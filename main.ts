radio.onReceivedNumber(function (receivedNumber) {
    CommandSpeed = receivedNumber
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "Forward") {
        pins.servoWritePin(AnalogPin.P2, CommandSpeed)
        pins.servoWritePin(AnalogPin.P1, 180 - CommandSpeed)
        basic.showNumber(CommandSpeed)
        BrightLights.showColor(neopixel.colors(NeoPixelColors.White))
    }
    if (receivedString == "Spin") {
        pins.servoWritePin(AnalogPin.P2, LeftSpin)
        pins.servoWritePin(AnalogPin.P1, RightSpin)
        BrightLights.showRainbow(1, 360)
    }
    if (receivedString == "Stop") {
        pins.servoWritePin(AnalogPin.P2, RightStop)
        pins.servoWritePin(AnalogPin.P1, LeftStop)
        basic.showNumber(CommandSpeed)
        BrightLights.clear()
        BrightLights.show()
    }
    if (receivedString == "Back") {
        pins.servoWritePin(AnalogPin.P2, 180 - CommandSpeed)
        pins.servoWritePin(AnalogPin.P1, CommandSpeed)
        basic.showNumber(CommandSpeed)
        BrightLights.showColor(neopixel.colors(NeoPixelColors.Red))
    }
})
let CommandSpeed = 0
let RightStop = 0
let LeftStop = 0
let RightSpin = 0
let LeftSpin = 0
let BrightLights: neopixel.Strip = null
radio.setGroup(1)
BrightLights = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
BrightLights.setBrightness(200)
LeftSpin = 180
RightSpin = 180
LeftStop = 90
RightStop = 90
CommandSpeed = 180
pins.servoWritePin(AnalogPin.P2, LeftStop)
pins.servoWritePin(AnalogPin.P1, RightStop)
