const express = require('express')
const joi = require('joi')
const api = require('./api')

const app = express()
const PORT = 8080 || process.env.PORT

app.use(express.json())
app.use('/api', api)



app.get("/", (req, res) => {
    res.send(`OK.`)
})



app.listen(PORT, () => console.log(`Serwer uruchomiony pod portem: ${PORT}`))