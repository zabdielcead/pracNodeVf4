// instalamos npm i express
const express = require('express')
const app = express();
const hbs = require('hbs');
require('dotenv').config();
const port = process.env.PORT;
//handle bars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err) {});


// servir contenido estatico
app.use(express.static('public')); // es como si buscara app.get('/', function(req, res) {

//busca la ruta app.use(express.static('public')); y si no la encuentra pasa a la siguiente


//express busca por default el index.html
app.get('/', function(req, res) {
    //res.send('Hello World');
    res.render('home', {
        nombre: 'Carlos Arteagas',
        titulo: 'Curso de node'
    });
});

app.get('/generic', function(req, res) {
    res.render('generic', {
        nombre: 'Carlos Arteagas',
        titulo: 'Curso de node'
    });
});
app.get('/elements', function(req, res) {
    res.render('elements', {
        nombre: 'Carlos Arteagas',
        titulo: 'Curso de node'
    });
});

app.get('*', function(req, res) {
    //res.send('404 | not found');
    res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Example app listening ${port}`);
});