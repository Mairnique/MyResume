// new 
const PORT = process.env.PORT || 3000
const express = require("express")
const app = express()
// new
const https = require('https')
const server = https.Server(app)

app.use(express.static("public"))

//new
server.listen((PORT) => {
    console.log('running')
})

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    console.log("here")
    res.render("index")
})

app.listen(PORT)

