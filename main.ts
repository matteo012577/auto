joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    radio.sendValue("stop", 0)
    basic.showLeds(`
        # # # # #
        # # . . #
        # . # . #
        # . . # #
        # # # # #
        `)
    joystickbit.Vibration_Motor(100)
})
input.onButtonPressed(Button.A, function () {
    wuKong.setAllMotor(-100, -100)
})
input.onButtonPressed(Button.AB, function () {
    wuKong.stopAllMotor()
})
input.onButtonPressed(Button.B, function () {
    wuKong.setAllMotor(100, 100)
})
radio.onReceivedValue(function (name, value) {
    basic.showString(name)
    if (name == "stop") {
        wuKong.stopAllMotor()
    } else if (name == "vooruit") {
        wuKong.setAllMotor(100, 100)
    } else if (name == "achteruit") {
        wuKong.setAllMotor(-100, -100)
    } else {
    	
    }
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    radio.sendValue("vooruit", -100)
    basic.showLeds(`
        . . # . .
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        `)
    joystickbit.Vibration_Motor(100)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendValue("achteruit", 100)
    basic.showLeds(`
        . . # . .
        . . # . .
        # . # . #
        . # # # .
        . . # . .
        `)
    joystickbit.Vibration_Motor(100)
})
joystickbit.initJoystickBit()
