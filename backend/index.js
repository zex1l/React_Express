const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes')

const app = express()
const PORT = 5000

app.use(cors());
app.use(bodyParser.json());
app.use(express.json({ extended: true }))
app.use(routes)


app.listen(PORT, (err) => {
    if(err) return console.log(err)

    console.log("Server start")
})

