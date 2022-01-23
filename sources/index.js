const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()
const router = require('./Routes/Router')

const app = express()

const dbUri = process.env.DB_URI

mongoose.connect('mongodb+srv://<luizsaulo>:<ceara1914>@clusterinfleuxchallenge.re5l4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
}, () => console.log('Connected to database'))

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(3333, ()=> console.log('Server running on port 3333'))