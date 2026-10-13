mp3v3.initialiser(SerialPin.P1, SerialPin.P0)
mp3v3.volume(20)
basic.forever(function () {
    if (grove.measureInCentimetersV2(DigitalPin.P2) < 10) {
        basic.showIcon(IconNames.Yes)
        mp3v3.jouer(1)
        basic.pause(5000)
    } else {
        basic.showIcon(IconNames.Square)
        mp3v3.arreter()
    }
})
