const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configurações
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// Rotas
app.get('/', (req, res) => {
    res.render('index'); // Renderiza a página inicial
});

app.post('/calculate', (req, res) => {
    const { num1, num2, operation } = req.body;

    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let result;

    switch (operation) {
        case 'add':
            result = a + b;
            break;
        case 'subtract':
            result = a - b;
            break;
        case 'multiply':
            result = a * b;
            break;
        case 'divide':
            result = b !== 0 ? a / b : 'Erro: Divisão por zero';
            break;
        case 'modulus':
            result = b !== 0 ? a % b : 'Erro: Divisão por zero';
            break;
        default:
            result = 'Operação inválida';
    }

    res.render('result', { num1: a, num2: b, operation, result });
});

// Inicia o servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
