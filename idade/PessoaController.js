class PessoaController {
    constructor() {
        let $ = document.querySelector.bind(document)
        this._inputData = $('.inputData')
        this._showData = $('.showData')
    }

    calculaIdade(event) {
        
        event.preventDefault();

        let inputDataValue = this._inputData.value;
        
        if (!inputDataValue) {
            console.error("Data não informada");
            return;
        }

        let data = new Date(inputDataValue);
        
        if (isNaN(data.getTime())) {
            console.error("Data inválida");
            return;
        }

        let pessoa = new Pessoa(data);

        let anoNascimento = pessoa.data.getFullYear()
        let anoAtual = new Date().getFullYear()

        alert(`Você tem ${anoAtual - anoNascimento} anos de idade.`)
    }
}

