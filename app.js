//Loading modules
    const express = require('express')
    const Handlebars = require('handlebars')
    const handlebars = require('express-handlebars')
    const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
    const insecureHandlebars = allowInsecurePrototypeAccess(Handlebars)
    
    const bodyParser = require('body-parser')
    const mongoose = require('mongoose')

    const app = express()

// Configurations
    //Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    //Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main', handlebars: allowInsecurePrototypeAccess(Handlebars)}))
        app.set('view engine', 'handlebars')
    //Mongoose

//Routes

//Others

const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor rodando em http://localhost:8081")
}).catch((err) => {
    console.log("Erro ao conectar com o servidor.")
})
