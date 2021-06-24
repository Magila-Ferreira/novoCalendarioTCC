// ******************************************************************
// Importar o express + body-parser
const express = require('express')
const bodyParser = require('body-parser')
const { query } = require('express')

// Inicializar o express
const app = express()

// Configurar o ejs e a pasta estática
app.set('view engine', 'ejs')
app.use(express.static('public'))

// Configurar o bodyParser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// rota
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/admin', (req, res) => {
    res.render('admin')
})

app.post('/validarLogin', (req, res) => {
    res.redirect('evento')
})

app.get('/evento', (req, res) => {
    res.render('evento')
})

app.post('/salvarEvento', (req, res) => {
    res.redirect('evento')
})

app.get('/calendario', (req, res) => {
    res.render('calendario')
})

// ouvir uma porta
app.listen(3000)

// **************************** Configurando o GitHub

// git config --global user.name "magila-ferreira"
// git config --global user.email "magilamorganasf@hotmail.com"

// **************************** Salvar no GitHub

// git add . 
// git commit -m "TCC" 
// git push origin main

