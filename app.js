const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000; // Usando uma porta alternativa para evitar conflitos

// Configurar o EJS como mecanismo de template
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Definindo a pasta 'public' como local dos arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.render('index');
});

// Rota para a página de Metas
app.get('/metas', (req, res) => {
    res.render('metas'); // Crie um arquivo metas.ejs na pasta views
});

// Rota para a página de Habilidades
app.get('/habilidades', (req, res) => {
    res.render('habilidades'); // Crie um arquivo habilidades.ejs na pasta views
});

app.get('/faleconosco', (req, res) => {
    res.render('faleconosco'); 
});

// Rota para a página de Login
app.get('/login', (req, res) => {
    res.render('login'); // Crie um arquivo login.ejs na pasta views
});

app.get('/sobrenos', (req, res) => {
    res.render('sobrenos'); 
});

app.get('/detalhes_meta1', (req, res) => {
    res.render('detalhes_meta1'); // Crie um arquivo metas.ejs na pasta views
});


app.get('/faq', (req, res) => {
    res.render('faq'); 
});

app.get('/dashboard', (req, res) => {
    res.render('dashboard');
})

app.get('/navbar', (req, res) => {
    res.render('navbar');
})


// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
