require("dotenv").config();
bodyParser = require('body-parser');
var produtos = require('./dao/DAOproduto.js');
 
const express = require('express');
const app = express();

app.use(express.json());
const port = process.env.PORT;

app.get('/produtos', async (req, res) => {
    const results = await produtos.listar();
    res.json(results);
})

app.get('/produtos/:id', async (req, res) => {
    const results = await produtos.listarPorId(req.params.id);
    res.json(results);
})

app.delete('/produtos/:id', async (req, res) => {
    await produtos.excluir(req.params.id);
    res.sendStatus(204);
    res.json('Produto excluído com sucesso');
})

app.post('/produtos', async (req, res) => {
    await produtos.inserir(req.body[0]);
    res.sendStatus(201);
});

app.patch('/produtos/:id', async (req, res) => {
    await produtos.atualizar(req.params.id, req.body[0]);
    res.sendStatus(200);
})

app.listen(port);