class Produto {
    constructor(descricao, preco, ncm, cest, unidade, codigoBarras) {
        this.descricao = descricao;
        this.preco = preco;
        this.ncm = ncm;
        this.cest = cest;
        this.unidade = unidade;
        this.codigoBarras = codigoBarras;
    }
}

module.exports = Produto;
