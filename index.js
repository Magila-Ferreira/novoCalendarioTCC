// ******************************************************************
// Importar o express + body-parser
const express = require('express')
const bodyParser = require('body-parser')

// Inicializar o express
const app = express() 

// Configurar o ejs e a pasta estática
app.set('view engine','ejs')
app.use(express.static('public'))

// Configurar o bodyParser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// rota
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/adm', (req, res) => {
    res.render('adm')
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

