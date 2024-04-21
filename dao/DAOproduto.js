const MySqlConnection = require("../db");

conexaoDb = new MySqlConnection(process.env.CONNECTION_STRING);

async function listar() {
    const res = await conexaoDb.query('SELECT * FROM produtos');
    return res;
}

async function listarPorId(id) {
    const res = await conexaoDb.query('SELECT * FROM produtos WHERE ID=?', [id]);
    return res;
}
 
async function excluir(id) {
    return await conexaoDb.query('DELETE FROM produtos where id=?;', [id]);
}

async function inserir(produto) {
    const values = [produto['descricao'], 
                    produto['preco'],
                    produto['ncm'],
                    produto['cest'],
                    produto['unidade'],
                    produto['codigoBarras']];        
    const sql = 'INSERT INTO produtos(descricao, preco, ncm, cest, unidade, codigoBarras) VALUES (?,?,?,?,?,?);';
    await conexaoDb.query(sql, values);
}

async function atualizar(id, produto) {
    const sql = 'UPDATE produtos SET descricao=?, preco=?, ncm=?, cest=?, unidade=?, codigoBarras=? WHERE id=?';
    const values = [produto['descricao'], 
                    produto['preco'],
                    produto['ncm'],
                    produto['cest'],
                    produto['unidade'],
                    produto['codigoBarras'],   
                    id];   
    await conexaoDb.query(sql, values);
}
 

module.exports = { listar, listarPorId, excluir, inserir, atualizar }