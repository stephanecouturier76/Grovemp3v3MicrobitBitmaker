//% weight=100 color=#E5007D icon="\uf001"
//% block="MP3 Grove v3"
namespace mp3v3 {
    function envoyer(cmd: number, data: number[]) {
        let len = data.length + 3
        let somme = len + cmd
        let buf = [0x7E, len, cmd]
        for (let d of data) {
            buf.push(d)
            somme += d
        }
        buf.push(somme & 0xFF)
        buf.push(0xEF)
        serial.writeBuffer(Buffer.fromArray(buf))
    }
    //% block="MP3 initialiser TX %tx RX %rx"
    //% tx.defl=SerialPin.P1 rx.defl=SerialPin.P0
    export function initialiser(tx: SerialPin, rx:
        SerialPin) {
        serial.redirect(tx, rx, BaudRate.BaudRate9600)
        basic.pause(2000)
    }
    //% block="MP3 volume %v"
    //% v.min=0 v.max=31 v.defl=20
    export function volume(v: number) {
        envoyer(0xAE, [v])
        basic.pause(300)
    }
    //% block="MP3 jouer la piste %n"
    //% n.min=1 n.max=255 n.defl=1
    export function jouer(n: number) {
        envoyer(0xA2, [0, n])
    }
    //% block="MP3 arrêter"
    export function arreter() {
        envoyer(0xAB, [])
    }
}
