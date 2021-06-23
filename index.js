// ******************************************************************
// Importar o express + body-parser
const express = require('express')
const bodyParser = require('body-parser')

// Inicializar o express
const app = express() 

app.use('view engine', 'ejs')
app.use(express.static('public'))

// rota
app.get('/', (req, res) => {
    res.send('Bem vindo!!!')
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

