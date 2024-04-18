const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let pets = [];

app.get('/limpar', (req, res) => {
    pets = [];
    res.sendStatus(200);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/cadastrar', (req, res) => {
    const nome = req.body.nome;
    const idade = parseInt(req.body.idade);
    const peso = parseFloat(req.body.peso);

    const porte = (peso / (idade * 4)) * 52;
    const porteFormatado = porte.toFixed(2);

    const pet = { nome, idade, peso, porte: porteFormatado };
    pets.push(pet);

    res.redirect('/');
});

app.get('/lista', (req, res) => {
    res.send(pets);
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
