class Pessoa {
    constructor(_data) {
        this._data = new Date(_data.getTime());
    }

    get data() {
        return new Date(this._data.getTime());
    }
}
