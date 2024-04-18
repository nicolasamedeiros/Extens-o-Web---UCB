const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let alunos = [];

app.post('/limpar-alunos', (req, res) => {
    alunos = [];
    res.send('Lista de alunos limpa.');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/adicionar-aluno', (req, res) => {
    const nome = req.body.nome;
    const nota1 = parseFloat(req.body.nota1);
    const nota2 = parseFloat(req.body.nota2);
    const media = (nota1 + nota2) / 2;
    const aluno = { nome, nota1, nota2, media };
    alunos.push(aluno);
    const mediaTurma = alunos.reduce((acc, curr) => acc + curr.media, 0) / alunos.length;
    const alunoMaiorNota = alunos.reduce((acc, curr) => (curr.media > acc.media ? curr : acc), { media: -1 });
    res.send({ mediaTurma, alunoMaiorNota, alunos });
});

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
