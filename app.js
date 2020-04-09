//Loading modules
    const express = require('express')
    const handlebars = require('express-handlebars')
    const Handlebars = require('handlebars')
    const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
    const bodyParser = require('body-parser')
    const mongoose = require('mongoose')
    const app = express()
    const admin = require("./routes/admin")
    const path = require('path')
    const session = require("express-session")
    const flash = require("connect-flash")
// Configurations
    //Session
        app.use(session({
            secret: "cursodenode",
            resave: true,
            saveUninitialized: true
        }))
        app.use(flash())
    //Middleware
        app.use((req, res, next) => {
            res.locals.success_msg = req.flash("success_msg")
            res.locals.error_msg = req.flash("error_msg")
            next() // Tem que colocar o next, caso contrário ele para a aplicação aqui. Em cada página nova o middleware é chamado.
        })
    //Body Parser
        app.use(bodyParser.urlencoded({extended: true}))
        app.use(bodyParser.json())
    //Handlebars
        app.engine('handlebars', handlebars({defaultLayout: 'main', 
                                             handlebars: allowInsecurePrototypeAccess(Handlebars)} ))
        app.set('view engine', 'handlebars')


    //Mongoose
        mongoose.Promise = global.Promise
        mongoose.connect('mongodb://localhost/blogApp', {useUnifiedTopology: true, useNewUrlParser: true,
        }).then(() => {
            console.log("MongoDB conectado")
        }).catch((err) => {
            console.log("Houve um erro ao se conectar ao mongoDB: "+err)
        }) 
    //Public
        app.use(express.static(path.join(__dirname, "/public")))

//Routes
    app.use('/admin', admin)


//Others

    const PORT = 8081
    app.listen(PORT, () => {
        console.log("Servidor rodando em http://localhost:8081")
    })
