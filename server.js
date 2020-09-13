const express = require("express");
const path = require('path')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

const app = express();

// For static content
app.use(express.static(path.join(__dirname, 'public')))

// Using URL Encoded body parsing
app.use(bodyParser.urlencoded({ extended: true }));

// Setting up view engine with EJS
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Setting up the routes : TODO Check for login controller
app.get('/', (req, res) => { res.render('pages/index') })

app.listen(
    PORT, 
    console.log(`Application running on ${PORT}`)
);