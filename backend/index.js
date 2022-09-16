const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express()
const PORT = 5000

app.use(cors());
app.use(bodyParser.json());

app.use(express.json({ extended: true }))

app.listen(PORT, (err) => {
    if(err) return console.log(err)

    console.log("Server start")
})

const data = {
    name: 'Maks'
}

app.get('/api', (req, res) => {

    res.json(data)
})
