class Produto {

    constructor (_nome, _preco, _quantidadeEstoque) {
        Object.assign(this, {_nome, _preco, _quantidadeEstoque})
    }

    calcularTotalVenda (quantidade) {

        if (this.nome === 'bolacha') {
            this._valor = quantidade * this._preco
            return this._valor
        } else {
            throw new Error ('Produto não disponível')
        }

    }

    adicionarEstoque (quantidade) {
        this._quantidadeEstoque += quantidade
    }

    removerEstoque (quantidade) {

        if (this._quantidadeEstoque >= quantidade) {
            this._quantidadeEstoque -= quantidade
        } else {
            throw new Error ('Quantidade mínima me estoque')
        }

    }

    get nome () {
        return this._nome
    }

    get preco () {
        return this._preco
    }

    get quantidadeEstoque () {
        return this._quantidadeEstoque
    }

}