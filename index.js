const { Telegraf } = require('telegraf');
const bodyParser = require('body-parser')

const express = require('express')
const app = express()
const port = 3000
const admin = "1705541075"
const bot = new Telegraf("5630630605:AAFIlnAE3SN4HIPvipPS6vViGm6e0PSH8jk");
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public/'))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/views/index.html")
})
app.get('/scratch', (req, res) => {
    res.sendFile(__dirname + "/views/scratch.html")
})
app.get('/arduino', (req, res) => {
    res.sendFile(__dirname + "/views/arduino.html")
})
app.get('/arduino2', (req, res) => {
    res.sendFile(__dirname + "/views/arduino2.html")
})
app.get('/python', (req, res) => {
    res.sendFile(__dirname + "/views/python.html")
})
app.post("/contact", (req, res) => {
    const { lastname, message, name, phone } = req.body;
    bot.telegram.sendMessage(admin, `Name: ${name} 

Lastname: ${lastname}

Phone: ${phone}

Message: ${message}  `, {
        parse_mode: "HTML"
    })
    res.redirect("/")
})
app.post("/contact/scratch", (req, res) => {
    const { name, lastname, phone } = req.body;
    bot.telegram.sendMessage(admin, `Course: Scratch  

Name: ${name}

Lastname:${lastname}

Phone: ${phone}   `, {
        parse_mode: "HTML"
    })
    res.redirect("/")
})
app.post("/contact/arduino", (req, res) => {
    const { name, lastname, phone } = req.body;
    bot.telegram.sendMessage(admin, `Course: Arduino  

Name: ${name}
    
Lastname:${lastname}
    
Phone: ${phone}     `, {
        parse_mode: "HTML"
    })
})
app.post("/contact/arduino2", (req, res) => {
    const { name, lastname, phone } = req.body;
    bot.telegram.sendMessage(admin, `Course: Arduino 2

Name: ${name}

Lastname:${lastname}

Phone: ${phone}   `, {
        parse_mode: "HTML"
    })
})
app.post("/contact/python", (req, res) => {
    const { name, lastname, phone } = req.body;
    bot.telegram.sendMessage(admin, `Course: Python
    
Name: ${name}

Lastname:${lastname}

Phone: ${phone}   `, {
        parse_mode: "HTML"
    })
    res.redirect("/")
})
app.listen(port)
