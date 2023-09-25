class Horas {

    constructor (horas) {
        this._horas = horas
    }

    converterHorasMinutos () {

        const [horas, minutos] = this._horas.split(':')
        const totalMinutos = parseInt(horas) * 60 + parseInt(minutos)
        console.log(totalMinutos)
        return totalMinutos
    }

}
